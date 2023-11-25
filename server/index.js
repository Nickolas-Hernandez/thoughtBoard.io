require('dotenv/config');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const express = require('express');
const app = express();

const jsonMiddleware = express.json();
const staticMiddleware = require('./static-middleware');

const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(jsonMiddleware);
app.use(staticMiddleware);

app.get('/api/createUser', (req, res, next) => {
  const uuid = uuidv4();
  const sql = `
    insert into "users" ("uuid")
           values ($1)
    returning *;
  `;
  const params = [ uuid ];
  db.query(sql, params)
    .then(result => {
      const newUser = result.rows[0];
      const token = jwt.sign({ id: newUser.id }, newUser.uuid);
      const payload = { userId: newUser.id };
      res.status(200).json({ token: token, payload: payload });
    })
    .catch(err => next(err));
});

app.get('/api/userProjects/:userId', (req, res, next) => {
  const user = req.params.userId;
  if (!user) {
    throw new ClientError(400, 'Missing user ID');
  }
  const projectQuery = `
    select "id",
           "title",
           "nextNoteId"
      from "projects"
      where "owner" = $1;
  `;
  const params = [ user ];
  db.query(projectQuery, params)
    .then(projects => {
      res.status(200).json(projects.rows);
    })
    .catch(err => next(err));
});

app.get('/api/getNotes/:projectId', (req, res, next) => {
  const projectId = req.params.projectId;
  if (!projectId) {
    throw new ClientError(400, 'Missing project ID');
  }
  const notesQuery = `
    select *
      from "notes"
      where "project" = $1
  `;
  const params = [ projectId ];
  db.query(notesQuery, params)
    .then(notes => {
      res.status(200).json(notes.rows);
    })
    .catch(err => next(err));
});

app.post('/api/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    const userResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length > 0) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    const newUser = await db.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [ email, hashedPassword ]
    );

    // Generate JWT
    const userId = newUser.rows[0].id;
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

    // Send the JWT to the client
    res.status(201).json({ token, message: 'User created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/api/newProject', (req, res, next) => {
  const { projectName, owner } = req.body;
  const nextNoteId = 0;
  if (!projectName || !owner) {
    throw new ClientError(400, 'Project name and project owner are required field');
  }
  const sql = `
    insert into "projects" ("title", "owner", "nextNoteId")
          values ($1, $2, $3)
    returning "id", "title", "nextNoteId";
  `;
  const params = [ projectName, owner, nextNoteId ];
  db.query(sql, params)
    .then(result => {
      res.status(200).json({ project: result.rows[0] });
    });
});

app.post('/api/newNote/:projectId', (req, res, next) => {
  const {
    created,
    lastUpdate
  } = req.body;
  const project = req.params.projectId;
  const sql = `
  insert into "notes" ( "order", "project", "title", "data", "createdAt", "lastEdited")
         values ($1, $2, $3, $4, $5, $6)
  returning *`;
  const params = [
    1,
    project,
    'New Note',
    'Note Data',
    created,
    lastUpdate ];
  db.query(sql, params).then(result => {
    res.status(200).json({ savedNote: result.rows[0] });
  });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http server listening on port ${process.env.PORT}`);
});

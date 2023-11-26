require('dotenv/config');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const authenticateToken = require('./authenticate-token');

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

app.post('/api/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    const userResult = await db.query('SELECT * FROM users WHERE email = $1', [ email ]);
    if (userResult.rows.length > 0) {
      return res.status(409).json({ message: 'User already exists.' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const uuid = uuidv4();
    const newUser = await db.query(
      'INSERT INTO users (email, password, uuid) VALUES ($1, $2, $3) RETURNING uuid',
      [ email, hashedPassword, uuid ]
    );
    const userId = newUser.rows[0].id;
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token, message: 'User created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/api/login', async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  try {
    const userResult = await db.query('SELECT * FROM users WHERE email = $1', [ email ]);
    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
    const user = userResult.rows[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, message: 'Login successful.' });
  } catch (error) {
    next(new ClientError(500, 'Internal server error'));
  }
});

app.use(authenticateToken);

app.get('/api/user/', async (req, res, next) => {
  try {
    const userQuery = `
      select "id", 
             "email", 
             "uuid" 
        from users 
        where id = $1`;
    const userResult = await db.query(userQuery, [ req.user.userId ]);
    if (userResult.rows.length > 0) {
      const userDetails = userResult.rows[0];
      res.json(userDetails);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
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

app.post('/api/newNote/', (req, res, next) => {
  const { projectId } = req.body;
  const createdAt = new Date();
  const lastUpdate = new Date();
  console.log('req body: ', req.body);
  const sql = `
  insert into "notes" ( "order", "project", "title", "data", "createdAt", "lastEdited")
         values ($1, $2, $3, $4, $5, $6)
  returning *`;
  const params = [
    1,
    projectId,
    'New Note',
    'Note Data',
    createdAt,
    lastUpdate ];
  db.query(sql, params).then(result => {
    console.log('result: ', result.rows[0]);
    res.status(200).json({ savedNote: result.rows[0] });
  });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http server listening on port ${process.env.PORT}`);
});

require('dotenv/config');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

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

app.post('/api/newProject', (req, res, next) => {
  const { projectName, owner } = req.body;
  const nextNoteId = 0;
  if (!projectName || !owner) {
    throw new ClientError(400, 'Project name and project owner are required field');
  }
  const sql = `
    insert into "projects" ("title", "owner", "nextNoteId")
          values ($1, $2, $3)
    returning "id", "title";
  `;
  const params = [ projectName, owner, nextNoteId ];
  db.query(sql, params)
    .then(result => {
      res.status(200).json({ project: result.rows[0] });
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http server listening on port ${process.env.PORT}`);
});

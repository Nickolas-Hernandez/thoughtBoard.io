require('dotenv/config');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

const express = require('express');
const app = express();

const jsonMiddleware = express.json();
const staticMiddleware = require('./static-middleware');

const clientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(jsonMiddleware);
app.use(staticMiddleware);

app.get('/api/createUser', (req, res, next) => {
  const uuid = uuidv4();
  console.log('uuid: ', uuid);
  const sql = `
    insert into "users" ("uuid")
           values ($1)
    returning *;
  `
  const params = [ uuid ];
  db.query(sql, params)
    .then(result => {
      const newUser = result.rows[0];
      console.log('newUser', newUser);
      const token = jwt.sign({ id: newUser.id }, newUser.uuid);
      console.log("token: ", token);
      payload = { userId: newUser.id}
      res.status(200).json({token: token, payload: payload});
    })
    .catch(err => next(err));
});

app.post("/api/newProject", (req, res, next ) => {
  const { projectName, owner } = req.body;
  res.status(200).json({ message: "we made it!" });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http server listening on port ${process.env.PORT}`);
})

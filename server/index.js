require('dotenv/config');

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




app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http server listening on port ${process.env.PORT}`);
})

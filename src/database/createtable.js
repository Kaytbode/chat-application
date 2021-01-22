import db from './index.js';

/* Created for the test environment */
const query = `
          CREATE TABLE users (
              email varchar(30) unique,
              password text
          )`;

db.query(query)
  .then(res => {
      console.log('table created')
      db.end();
    })
  .catch(err => console.log(err));

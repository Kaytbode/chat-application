import db from './index.js';

/* Created for the test environment */

const query = 'DROP TABLE users';

db.query(query)
  .then(res => {
      console.log('table dropped')
      db.end();
    })
  .catch(err => console.log(err));

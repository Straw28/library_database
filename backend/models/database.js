// for aws config, uncomment when ready to launch

// import mysql from '../node_modules/mysql2/promise.js';

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   connectionLimit: 10,
// });

// export default pool;


// local mysql workbench
// backend/database.js
import mysql from 'mysql2/promise.js';

const pool = mysql.createPool({
  host: 'db-meada.cdmimase86m5.us-east-2.rds.amazonaws.com', 
  user: 'meada_maria', // your username
  password: 'p@ssW03d', // your password
  database: 'Library_Database', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection
// uncomment to test connection
pool.query('SELECT 1 + 1 AS result')
  .then(([rows]) => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
  });

export default pool;
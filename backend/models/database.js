// backend/database.js
import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise.js';

console.log(process.env)

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
// models/itemsModel.js
import pool from '../database.js';

async function getAllItems() {
  const [rows] = await pool.query('SELECT * FROM items');
  return rows;
}

export default {
  getAllItems,
  // Add other model functions as needed
};
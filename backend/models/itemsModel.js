// backend/models/itemsModel.js
import pool from '../database.js';

class itemsModel {
  static async getAllItems() {
    try {
      const result = await pool.query('SELECT * FROM items');
      return result.recordset;
    } catch (err) {
      console.log(err);
      throw new Error('Failed to retrieve all items.');
    }
  }
}

export default itemsModel;

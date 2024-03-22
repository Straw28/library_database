import pool from './database.js';

class adminModel {
  static async findAllItems() {
    try {
      const [result] = await pool.query('SELECT * FROM items');
      return result;
    } catch(err) {
      console.log(err);
      throw new Error('Failed to retrieve all items');
    }
  }
}

export default adminModel;
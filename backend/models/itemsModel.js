// backend/models/itemsModel.js
import pool from './database.js';

class ItemsModel {
  static async findAllItems() {
    try {
      const [result] = await pool.query(`SELECT * FROM items;`);
      return result;
    } catch(err) {
      console.log(err);
      throw new Error('Failed to retrieve all items');
    }
  }

  static async findAllItems() {
    try {
      const [result] = await pool.query(`SELECT * FROM items WHERE item_status = 'checked out';`);
      return result;
    } catch(err) {
      console.log(err);
      throw new Error('Failed to retrieve all checked out items');
    }
  }
}

export default ItemsModel;

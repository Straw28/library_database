// backend/models/itemsModel.js
import pool from './database.js';

class StaffModel {
  static async findAllStaffs() {
    try {
      const [result] = await pool.query(`SELECT * FROM employees;`);
      return result;
    } catch(err) {
      console.log(err);
      throw new Error('Failed to retrieve all employees');
    }
  }
}

export default StaffModel;

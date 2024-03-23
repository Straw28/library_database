// backend/models/finesModel.js
import pool from './database.js';

class FinesModel {
    static async getAllFines() {
        try {
            const [result] = await pool.query(`Select * FROM fines;`);
            return result;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to retrieve members.');
        }
    }
}

export default FinesModel;
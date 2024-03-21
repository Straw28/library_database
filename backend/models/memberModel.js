import pool from './database.js';

class MemberModel{
    /**
     * Function to get all user logins present in the database.
     * @returns A list of all user logins.
     */
    static async getAllMembers() {
        try {
            const [result] = await pool.query(`Select * FROM members;`);
            return result;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to retrieve members.');
        }
    }
}

export default MemberModel;
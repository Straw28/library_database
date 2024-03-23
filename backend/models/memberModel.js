import pool from './database.js';

class MemberModel{
    /**
     * Function to get all user logins present in the database.
     * @returns A list of all user logins.
     */
    static async getAllMembers() {
        try {
            const [result] = await pool.query(`Select * FROM members`);
            return result;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to retrieve members.');
        }
    }

    static async createMember(data) {
        try {
            const user = JSON.parse(data);
            console.log(user);

            //data we get from user on the front end:
            const {
                email,
                phone_number,
                password,
                first_name,
                last_name,
                date_of_birth,
                address
            } = user;

            //executing the query
            await pool.query(`
                INSERT INTO members 
                    (library_card_number, member_status, member_type, first_name, last_name, email_address, address, date_of_birth, item_borrowing_history, device_borrowing_history, registration_date, expiration_date, requests, fine_id, password) 
                VALUES 
                (UUID(), 'active', 'regular', '${first_name}', '${last_name}', '${email}', '${address}', '${dob}', NULL, NULL, CURDATE(), NULL, NULL, NULL, '${password}');
            `);

            console.log('New member created successfully.');
            return { message: 'New member created successfully.' };
        
        } catch (err) {
            console.log(err);
            throw new Error('Failed to create new customer.');
        }
    }

    static async findMemberByEmail(email) {
        try {
            const [result] = await pool.query(`Select * FROM members WHERE email_address = '${email}';`);
            return result;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to retrieve members.');
        }
    }
}

export default MemberModel;
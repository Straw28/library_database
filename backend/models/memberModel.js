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


            // member_id int PK 
            // library_card_number varchar(20) 
            // member_status enum('active','inactive') 
            // member_type varchar(20) 
            // first_name varchar(50) 
            // last_name varchar(50) 
            // email_address varchar(100) 
            // phone_number varchar(15) 
            // address varchar(255) 
            // date_of_birth date 
            // item_borrowing_history text 
            // device_borrowing_history text 
            // registration_date date 
            // expiration_date date 
            // requests text 
            // fine_id int 
            // password varchar(255)
           
        //executing the query
            await pool.query(`
                INSERT INTO members 
                    (library_card_number, member_status, member_type, first_name, last_name, email_address, phone_number, address, date_of_birth, item_borrowing_history, device_borrowing_history, registration_date, expiration_date, requests, fine_id, password) 
                VALUES 
                (UUID(), 'active', 'regular', '${first_name}', '${last_name}', '${email}', '${phone_number}', '${address}', '${date_of_birth}', NULL, NULL, CURDATE(), NULL, NULL, NULL, '${password}');
            `);
            
            console.log('New member created successfully.');
            return { message: 'New member created successfully.' };
        
        } catch (err) {
            console.log(err);
            throw new Error('Failed to create new customer.');
        }
    }

    //member logs in
    static async memberLogin(data) {
        try {
            // Parse the JSON data
            const user = JSON.parse(data);
            //console.log(user);
    
            // Destructure the username and password from parsed JSON
            const { library_card_number, password } = user;
    
            // Query the database for the username and password
            const result = await pool.query(`
                SELECT member_id
                FROM members 
                WHERE library_card_number = ? AND password = ?`, 
                [library_card_number, password]
            );
            

            // Check if any rows are returned from the query
            if (result.length > 0) {
                // Successful login, return member ID
                console.log(result);
                return result[0][0].member_id;
                
            } else {
                // No matching user found, throw an error
                throw new Error('Invalid username or password.');
            }
        } catch (err) {
            console.log(err);
            throw new Error('Failed to login.');
        }
    }
    
}

export default MemberModel;
// backend/controllers/memberController.js
import MemberModel from '../models/memberModel.js';
import bcrypt from 'bcrypt';

class MemberController{

    //to get all the members
    static async getAllMembers(req, res) {
        try {
            const members = await MemberModel.getAllMembers();

            // set the status code and content-type
            res.writeHead(200, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });

            // send the data
            res.end(JSON.stringify(members));

        } catch (error) {
            throw new Error(`Error getting all members.`);
        }
    }

    //create a member
    static async createMember(req, res, memberData) {
        try {
            const newmember = await MemberModel.createMember(memberData);
            
            res.writeHead(201, { "Content-Type": "application/json" });

            res.end(JSON.stringify(newmember));

        } catch (error) {
            // set error status code and content-type
            res.writeHead(500, { "Content-Type": "application/json" });
            // send error
            res.end(JSON.stringify({ message: err.message }));
        }
    }

    // login member
    static async authenticateMember(email, password) {
        try {
            // Find member by email
            const member = await MemberModel.findMemberByEmail(email);
            console.log(member);
            if (!member) return null;

            // Compare passwords
            
            console.log(typeof member[0].password);
            const match = await bcrypt.compare(password, member[0].password);
            if (!match) return null;

            return member;
        } catch (error) {
            console.error('Error authenticating member:', error);
            throw new Error('Failed to authenticate member');
        }
    }
}

export default MemberController;

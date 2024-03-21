import MemberModel from '../models/memberModel.js';

class MemberController{
    
    //to get all the members
    async getAllMembers(req, res) {
        try {
            const members = await MemberModel.getAllMembers();
            return members;

        } catch (error) {
            throw new Error(`Error getting all members.`);

        }
    }
    
}

export default MemberController;

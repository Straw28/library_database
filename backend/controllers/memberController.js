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

    //create a member:
    async createMember(memberData) {
        try {
            let newmember = await MemberModel.createMember(memberData);
            return newmember;

        } catch (error) {
            throw new Error(`Could not create member.`);

        }
    }

    //login for a member
    async memberLogin(data){
        try {
            let newmember = await MemberModel.memberLogin(data);
            return newmember;

        } catch (error) {
            throw new Error(`Could not login.`);

        }
    }
    
}

export default MemberController;

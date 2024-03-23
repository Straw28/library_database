// backend/routes/memberRoute.js
import MemberController from '../controllers/memberController.js';
import { authenticate, init_jwt } from '../jwt.js';
import getReqData from '../utils.js';

async function memberRoute(req, res, path, method) {
    // get all users
    if (path === '/api/member' && method === 'GET') {
        MemberController.getAllMembers(req, res);
    
    // create a new library member
    } else if (path === '/api/member/register' && method === 'POST') {
        try {
            // parse input data
            const data = await getReqData(req);
            console.log('Received data:', data);
    
            MemberController.createMember(req, res, data);
        } catch (error) {
            console.error('Error creating member:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to create member' }));
        }

    // user's can login 
    } else if (path == '/api/member/login' && method === 'POST'){
        try {
            // parse input data
            const data = await getReqData(req);
            const { email, password } = JSON.parse(data);
            console.log(data);
            // authenticate user
            const member = await MemberController.authenticateMember(email, password);
            
            if (!member) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid email or password' }));
                return;
            }

            // generate JWT token
            const token = await init_jwt({ memberId: member.member_id, role: member.member_type });

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ token: token }));
        } catch (error) {
            console.error('Error logging in member:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to log in member' }));
        }

    // user's can check out books 


    } else {
        // Handle other HTTP methods if needed
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
}

export default memberRoute;
// backend/routes/staffRoute.js
import StaffController from '../controllers/staffController.js';

function staffRoute(req, res, path, method) {
  if (path === '/api/staff' && method === 'GET') {
    StaffController.getAllStaffs(req, res);
  } else {
    // Handle other HTTP methods if needed
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
}
  
export default staffRoute;
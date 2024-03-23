// backend/routes/finesRoute.js
import FinesController from '../controllers/finesController.js';

async function finesRoute(req, res, path, method) {
    // get all users
    if (path === '/api/fines' && method === 'GET') {
        FinesController.getAllFines(req, res);
    } else {
        // Handle other HTTP methods if needed
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
}

export default finesRoute;
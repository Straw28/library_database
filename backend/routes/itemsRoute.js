import itemsController from '../controllers/itemsController.js';

function itemsRoute(req, res, path, method) {
    if (method === 'GET') {
      itemsController.getItems(req, res);
    } else {
      // Handle other HTTP methods if needed
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
  }
  
export default itemsRoute;
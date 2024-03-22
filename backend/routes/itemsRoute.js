// backend/routes/itemsRoute.js
import itemsController from '../controllers/itemsController.js';

function itemsRoute(req, res, path, method) {
  if (path === '/api/items' && method === 'GET') {
    itemsController.getItems(req, res);
  } else if (path === '/api/items' && method === 'POST') {
    const itemData = JSON.parse(req.body);
    itemsController.createItem(req,res,itemData);
  } else {
    // Handle other HTTP methods if needed
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
}
  
export default itemsRoute;
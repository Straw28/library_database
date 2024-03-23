// backend/routes/itemsRoute.js
import ItemsController from '../controllers/itemsController.js';

function itemsRoute(req, res, path, method) {
  if (path === '/api/items' && method === 'GET') {
    ItemsController.getAllItems(req, res);
  } else if (path === '/api/items/checked-out' && method === 'GET') {
    ItemsController.getAllCheckedOutItems(req,res);
  } else if (path === '/api/items' && method === 'POST') {
    const itemData = JSON.parse(req.body);
    ItemsController.createItem(req,res,itemData);
  } else {
    // Handle other HTTP methods if needed
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
}
  
export default itemsRoute;
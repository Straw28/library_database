// backend/controllers/itemsController.js
import ItemsModel from '../models/itemsModel.js';

class ItemsController {
  // @desc  Gets All Items
  // @route GET /api/items
  static async getAllItems(req, res) {
    try {
      const items = await ItemsModel.findAllItems();

      res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      });
      
      res.end(JSON.stringify(items));

    } catch(err) {
      // set error status code and content-type
      res.writeHead(500, { "Content-Type": "application/json" });
      // send error
      res.end(JSON.stringify({ message: err.message }));

    }
  }

  // @desc  Gets All Checked-Out Items
  // @route GET /api/items/checked-out
  static async getAllCheckedOutItems(req, res) {
    try {
      const items = await ItemsModel.findAllCheckedOutItems();

      res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      });
      
      res.end(JSON.stringify(items));

    } catch(err) {
      // set error status code and content-type
      res.writeHead(500, { "Content-Type": "application/json" });
      // send error
      res.end(JSON.stringify({ message: err.message }));

    }
  }
}

export default ItemsController;

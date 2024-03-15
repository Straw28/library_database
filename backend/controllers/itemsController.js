// backend/controllers/itemsController.js
import itemsModel from '../models/itemsModel.js';

class itemsController {
  async getAllItems() {
    return await itemsModel.getAllItems();
  }
}

export default itemsController;

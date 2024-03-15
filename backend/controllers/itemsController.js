import itemsModel from '../models/itemsModel.js';

async function getAllItems(req, res) {
  try {
    const items = await itemsModel.getAllItems();
    res.statusCode = 200; // Set status code before sending response
    res.setHeader('Content-Type', 'application/json'); // Set content type
    res.end(JSON.stringify(items)); // Send response with items data
  } catch (error) {
    console.error('Error fetching items:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json'); // Set content type
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}

export default {
  getAllItems,
  // Add other controller functions as needed
};
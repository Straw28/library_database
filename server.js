// server.js
import http from 'http';
import url from 'url';

import itemsController from './controllers/itemsController.js';

const PORT = process.env.PORT || 5173; // Change the port to 5173 to match the React URL

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const reqURL = url.parse(req.url, true);
  const path = reqURL.pathname;
  const method = req.method;

  console.log(`Route hit: ${path}`);
  console.log(method);

  if (method === 'OPTIONS') {
    // Preflight request, respond with 200 OK
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "http://localhost:5173", // Adjust the origin to match your React URL
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
      "Access-Control-Max-Age": 2592000
    });

    res.end();
    return;
  }

  // GET HANDLERS
  // Testing home
  else if (path === '/' && method === 'GET') {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify("Hello World"));
  }

  // Handle API routes
  else if (path === '/api/items' && method === 'GET') {
    console.log('items requested');
    try {
      await itemsController.getAllItems(req, res); // Pass both req and res to getAllItems
    } catch (error) {
      console.error('Error handling items request:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json'); // Set content type
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
   }
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

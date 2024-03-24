// backend/server.js
import http from 'http';
import url from 'url';
//const cors = require('cors');

import ItemsRoute from './routes/itemsRoute.js';
import FinesRoute from './routes/finesRoute.js';
import MemberRoute from './routes/memberRoute.js';
import StaffRoute from './routes/staffRoute.js';
import AdminRoute from './routes/adminRoute.js';


//const corsMiddleware = cors();
const server = http.createServer(async(req, res) => {
  //corsMiddleware(req, res, () => {
  const path = url.parse(req.url, true).path;
  const method = req.method;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows all origins
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST'); // Specifies the methods allowed when accessing the resource
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization'); // Indicates which headers can be used during the actual request

  console.log(`Route hit: ${path}`);
  console.log(method);

  if (method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;

  } else if (path.includes('/api/items')) {
    ItemsRoute(req, res, path, method);

  // add books, ebooks, dvds, and more items


  // add printers, laptops, and more ultilies



  } else if (path.includes('/api/fines')) {
    FinesRoute(req, res, path, method);

  } else if (path.includes('/api/member')) {
    MemberRoute(req, res, path, method);

  } else if (path.includes('/api/staff')) {
    StaffRoute(req, res, path, method);

  } else if (path.includes('/api/admin')) {
    AdminRoute(req, res, path, method);
    
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found'}));

  }
});

//});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
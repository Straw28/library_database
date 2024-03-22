// backend/server.js
import http from 'http';
import url from 'url';

import itemsRoute from './routes/itemsRoute.js'
import MemberController from './controllers/memberController.js';

import { init_jwt, authenticate } from './jwt.js';
import getReqData from './utils.js';

const server = http.createServer(async(req, res) => {
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

  } else if(path === '/api/items') {
    itemsRoute(req, res, path, method);
  } 

  
//----------------------------Member Operations------------------------------------------------------
 
  else if (path === '/member' && method === 'GET') {
      try {
        // set the status code and content-type
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        // get the users
        const members =  new MemberController().getAllMembers();
      
        // send the data
        res.end(JSON.stringify(members));
    } catch (error) {
        // set error status code and content-type
        res.writeHead(500, { "Content-Type": "application/json" });
        // send error
        res.end(JSON.stringify({ message: error.message }));
    }
  }

  else if (path === '/register' && method === 'POST') {
    try {
      // Receiving input data
      const data = await getReqData(req);
      console.log('Received data:', data);

      // Creating new member
      const newMember = await new MemberController().createMember(data);
        
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newMember));
    } catch (error) {
      console.error('Error creating member:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Failed to create member' }));
    }
  }

  // else if(path === '/staff' && method === 'GET'){
  //   // memberController.getAllMembers(req, res);
  // }
  
  // else if(path === '/admin' && method === 'GET'){
  //   // memberController.getAllMembers(req, res);
  // }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found'}));

  }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




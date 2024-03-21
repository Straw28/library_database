// backend/server.js
import http from 'http';
import url from 'url';
import MemberController from './controllers/memberController.js';
import itemsController from './controllers/itemsController.js';

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).path;
  const method = req.method;

  console.log(`Route hit: ${path}`);
  console.log(method);

  if (method === 'OPTION') {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
      "Access-Control-Max-Age": 2592000
    });
    res.end();
    return;

  } else if(path === '/api/items' && method === 'GET') {
    itemsController.getItems(req, res);


  } 
  
  else if(path === '/member' && method === 'GET'){
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

  else if(path === '/staff' && method === 'GET'){
    // memberController.getAllMembers(req, res);
  }
  
  else if(path === '/admin' && method === 'GET'){
    // memberController.getAllMembers(req, res);
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found'}));

  }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




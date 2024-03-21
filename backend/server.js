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

  
//----------------------------Member Operations------------------------------------------------------
 
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

  else if(path === '/register' && method === 'POST'){
    try {
      let body = '';
      
      // Listen for data chunks and append them to the body
      req.on('data', chunk => {
          body += chunk.toString();
      });

      // When all data is received
      req.on('end', async () => {
          try {
              // Parse the JSON data received from the frontend
              const requestData = JSON.parse(body);

              // Here you can manipulate the requestData object as needed
              
              // Send the parsed data to your backend
              const response = await fetch("http://localhost:5000/register", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(requestData) // Send the parsed JSON data to the backend
              });

              // Assuming the backend responds with JSON data
              const responseData = await response.json();

              // Send the response data received from the backend to the frontend
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify(responseData));
          } catch (error) {
              // Handle any errors that occur during parsing or fetching
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ message: error.message }));
          }
      });
  } catch (error) {
      // Handle any errors that occur
      res.writeHead(500, { "Content-Type": "application/json" });
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




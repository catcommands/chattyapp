const express = require('express');
const WebSocket = require('ws');
const uuidV1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        console.log(data);
      // Broadcast to everyone else.
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });
  });









//     console.log('Client connected');


// ws.on('message', function incoming(newMessage) {
//     const parsedMessage = JSON.parse(newMessage);
//         //console.log(parsedMessage);
//         console.log(`User ${parsedMessage.username} said ${parsedMessage.content}`);
//         parsedMessage.id = uuidV1();
//         //console.log('parsedMessage is', parsedMessage);
//         ws.send(JSON.stringify(parsedMessage));
//       });

//   // Set up a callback for when a client closes the socket. This usually means they closed their browser.
//   ws.on('close', () => console.log('Client disconnected'));
// });
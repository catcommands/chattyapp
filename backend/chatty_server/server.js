const express = require('express');
const SocketServer = require('ws').Server;
const uuidV1 = require('uuid/v1'); //This generates a v1 UUID = universally unique identifier (time-based) 

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

  // Create the WebSockets server
const wss = new SocketServer({ server });


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      console.log("client broadcasted to")
        client.send(JSON.stringify(data));
        console.log('Message is being sent to client from server now', data);
  
          // Broadcast to everyone else.
    });
  };
    console.log('Client connected');
    ws.on('message', function incoming(newMessage) {
      const parsedMessage = JSON.parse(newMessage);
          //console.log(parsedMessage);
          console.log(`User ${parsedMessage.username} said ${parsedMessage.content}`);
          //parsedMessage.id = uuidV1();
    
    switch (parsedMessage.message.type) {
    case 'postMessage': parsedMessage.message.type = 'newMessage';
    break;
    case 'postNotification': parsedMessage.message.type = 'newNotification';
    break;
    }
    
          wss.broadcast(parsedMessage);
        });

wss.clients.forEach(function each(client) {
  client.send(wss.clients.size);
  

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.

  client.on('close', () => {
    console.log('Client disconnected');
    wss.clients.forEach(function each(client) {
      client.send(wss.clients.size);
    });
  });
  })
  //ws.on('close', () => console.log('Client disconnected'));
});
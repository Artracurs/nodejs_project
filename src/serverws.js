// const WebSocket = require('ws');
// const server = new WebSocket.Server({host:'192.168.43.216', port: 3001 });
// const wss = new WebSocket.Server({ server });

// server.on('connection', (ws) => {
//     console.log('Client connected');

//     ws.on('message', (message) => {
//         console.log('Received:', message);

//         ws.send(`Server: ${message}`);

//         // Or, if you want to broadcast to all connected clients:
//         server.clients.forEach((client) => {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(`Broadcast: ${message}`);
//             }
//         });
//     });

//     ws.on('close', () => {
//         console.log('Client disconnected');
//     });
// });



// console.log('WebSocket server started on ws://localhost:3001');


const WebSocket = require('ws');
require('dotenv').config();

const PORT = process.env.WS_PORT
const HOST = process.env.WS_HOST

const wss = new WebSocket.Server({host: HOST, port: PORT });

wss.on('connection', function connection(ws) {
  console.log('Соединение установлено');

  ws.on('message', function incoming(message) {
    console.log(`Получено сообщение: ${message}`);

    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(`${message}`);
        }
    });
  });

  ws.on('close', function close() {
    console.log('Соединение закрыто');
  });
});

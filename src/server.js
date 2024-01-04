// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });


const WebSocket = require('ws');

const PORT = 3001;
const HOST = '192.168.43.216';

const wss = new WebSocket.Server({ host: HOST, port: PORT });

wss.on('connection', ws => {
    console.log('Новый клиент подключен.');

    ws.on('message', message => {
        const buffer = Buffer.from(message);
        const text = buffer.toString('utf-8');

        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(text);
            }
        });
    });

    ws.on('close', () => {
        console.log('Клиент отключен.');
    });
});

console.log(`WebSocket сервер запущен на порту ${wss.options.port}`);
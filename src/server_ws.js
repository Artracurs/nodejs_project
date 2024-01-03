const WebSocket = require('ws');
const server = new WebSocket.Server({host:'192.168.43.216', port: 3001 });
const wss = new WebSocket.Server({ server });

server.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log('Received:', message);

        // Here you can decide how to respond to the message
        // For example, echo back the received message
        ws.send(`Server received: ${message}`);

        // Or, if you want to broadcast to all connected clients:
        server.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(`Broadcast: ${message}`);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});



console.log('WebSocket server started on ws://localhost:3001');

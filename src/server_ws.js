const express = require('express');
const { Server } = require('ws');
const http = require('http')

const app = express();
const server = http.createServer(app)
const wss = new Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send(`Echo: ${message}`)
    })

    ws.close('close', () => {
        console.log('Client connected');
    });
})

server.listen()
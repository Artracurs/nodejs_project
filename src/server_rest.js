// import express, {Request, Response} from 'express';
// const app = express();
// const PORT = 3000;
// const HOST = '192.168.43.220'


// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello)');
// });
// app.listen(PORT, () => {
//     console.log(`Server has beed running on http://${HOST}:${PORT}`);
// });
require('dotenv').config();

const express =require('express');
const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;


app.get('/', (req, res) => {
    res.send('Hello)');
});
app.listen(PORT, HOST, () => {
    console.log(`Server has beed running on http://${HOST}:${PORT}`);
});

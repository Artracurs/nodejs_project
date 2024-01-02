import express, {Request, Response} from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('Hello)');
});
app.listen(PORT, () => {
    console.log(`Server has beed running on http://localhost:${PORT}`);
});
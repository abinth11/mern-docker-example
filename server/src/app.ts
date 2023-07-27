import express, { Request, Response } from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);
const PORT = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send("hello from server");
});

server.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

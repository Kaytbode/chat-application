import express from 'express';
import dotenv from 'dotenv';
import mountRoutes from './router/index.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

mountRoutes(app);

app.listen(() => {
    console.log(`app listening at http://localhost:${port}`)
})
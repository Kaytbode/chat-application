import express from 'express';
import dotenv from 'dotenv';
import mountRoutes from './router/index.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Chat Application!')
});

mountRoutes(app);

app.listen(() => {
    console.log(`app listening at http://localhost:${port}`)
})

export default app;

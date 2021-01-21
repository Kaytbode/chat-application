import authRouter from './auth.js';


const mountRoutes = app => {
    app.use('/api/v1/user/', authRouter)
}

export default mountRoutes;

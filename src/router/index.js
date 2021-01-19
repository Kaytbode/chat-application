import authRouter from './auth.js';


const mountRoutes = app => {
    app.use('/api/vi/user/', authRouter)
}

export default mountRoutes;

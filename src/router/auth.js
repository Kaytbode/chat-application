import express from 'express';
import { validate, validationRulesSignup } from '../middleware/validateuser.js';
import signUp from '../controller/signup.js';
import errorHandler from '../middleware/errorhandler.js';

const authRouter = express.Router();

authRouter.post('/signup', validate(validationRulesSignup), signUp, errorHandler);

export default authRouter;

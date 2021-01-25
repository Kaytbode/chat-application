import express from 'express';
import { validate, validationRulesSignup } from '../middleware/validateuser.js';
import signUp from '../controller/signup.js';

const authRouter = express.Router();

authRouter.post('/signup', validate(validationRulesSignup), signUp );

export default authRouter;

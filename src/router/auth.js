import express from 'express';
import { validate, validationRules } from '../middleware/validateuser.js';
import signUp from '../controller/signup.js';
import errorHandler from '../middleware/errorhandler.js';

const authRouter = express.Router();

authRouter.post('/signup', validate(validationRules), signUp(req, res, next), errorHandler(err, req, res, next));

export default authRouter;

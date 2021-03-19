import express from 'express';
import { 
    validate, 
    validationRulesSignup,
    validationRulesSignin
} from '../middleware/validateuser.js';
import signUp from '../controller/signup.js';
import signIn from '../controller/signin.js';

const authRouter = express.Router();

authRouter.post('/signup', validate(validationRulesSignup), signUp );
authRouter.post('/signin', validate(validationRulesSignin), signIn );

export default authRouter;

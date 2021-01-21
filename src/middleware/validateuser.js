import { body, validationResult } from 'express-validator';
import statusMessage from '../service/statuscodes.js';

const validationRules = [
    body('email').isEmail(),
    body('password').isLength({min: 6})
];

const validate = validations => {
    return async (req, res, next) => {
        for (let validation of validations) {
          const result = await validation.run(req);
          if (result.errors.length) break;
        }
    
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          return next();
        }

        res.status(400).send({ 
          message: statusMessage.badRequest,
          errors: errors.array() 
        });
    };
};

export { validationRules, validate };

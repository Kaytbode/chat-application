import { body, validationResult } from 'express-validator';
import statusMessage from '../service/statuscodes.js';
import findUser from '../service/finduser.js';

const validationRulesSignup = [
    body('email')
      .isEmail()
      .custom( async (value) => {
          const result = await findUser(value);

          if(result.rows[0]) {
            throw new Error('Email already in use');
          }

          return true;
      }),
    body('password').custom(({ length }) => {
      if (length < 6){
        throw new Error('Length of password is less than 6 characters');
      }

      return true;
    }),
    body('passwordConfirmation').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }

      return true;
    })
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

export { validationRulesSignup, validate };

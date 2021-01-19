import statuscode from '../service/statuscodes.js';

const errorHandler = (err, req, res, next) => {
    res.status(500).send({
        message: statuscode.serverError, 
        error: err 
    });
}

export default errorHandler;

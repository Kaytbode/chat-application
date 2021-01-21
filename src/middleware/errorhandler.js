import statusMessage from '../service/statuscodes.js';

const errorHandler = (err, req, res, next) => {
    res.status(500).send({
        message: statusMessage.serverError, 
        error: err 
    });
}

export default errorHandler;

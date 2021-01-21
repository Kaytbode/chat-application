import bcrypt from 'bcrypt';
import db from '../database/index.js';
import statusMessage from '../service/statuscodes.js';

const signUp = async (req, res, next) => {
    const { email, password } = req.body; 
    const text = 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *';

    try {
        const encrypted = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
        const { rows } = await db.query(text, [email, encrypted]);
        
        res.status(201).send({
            message: statusMessage.created,
            user: rows[0]
        });
    } catch (error) {
        const { detail } = error;
        res.status(403).send({
            message: statusMessage.forbidden,
            error: detail
        });
    }
};

export default signUp;

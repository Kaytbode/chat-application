import bcrypt from 'bcrypt';
import db from '../database/index.js';
import statusMessage from '../service/statuscodes.js';

const signUp = async (req, res) => {
    const { email, password } = req.body; 
    const text = 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *';
    
    const encrypted = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const { rows } = await db.query(text, [email, encrypted]);
    
    return res.status(201).send({
        message: statusMessage.created,
        user: rows[0]
    });

};

export default signUp;

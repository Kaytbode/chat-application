import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import findUser from '../service/finduser.js';
import statusMessage from '../service/statuscodes.js';

dotenv.config();

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const user = await findUser(email);

        const storedPassword = user.rows[0].password;

        const confirmed = await bcrypt.compare(password, storedPassword);

        if (!confirmed) {
           throw new Error('Password is incorrect');
        }
        
        const accessToken = jwt.sign(req.body, process.env.SECRET, { expiresIn: '1h' });

        return res.status(200).send({
            message: statusMessage.success,
            accessToken
        });

    } catch (error) {
        res.status(403).send({
            message: error.message
        });
    }   
};

export default signIn;

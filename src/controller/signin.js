import bcrypt from 'bcrypt';
import findUser from '../service/finduser.js';
import statusMessage from '../service/statuscodes.js';

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const user = await findUser(email);

        const storedPassword = user.rows[0].password;

        const confirmed = await bcrypt.compare(password, storedPassword);

        if (!confirmed) {
           throw new Error('Password is incorrect');
        }
        
        return res.status(200).send({
            message: statusMessage.success
        });

    } catch (error) {
        res.status(403).send({
            message: error.message
        });
    }   
};

export default signIn;

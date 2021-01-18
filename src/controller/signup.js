import insertUser from '../service/signup.js';
import encryptPassword from '../middleware/encryption.js';

/*
    Object => Object
    Inserts a user's validated details (email, encrypted password) into the database
*/
const signUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        const encrypted = await encryptPassword(password);
        const result = await insertUser(email, encrypted);
        
        res.send({
            // do something with result
        });
    } catch (error) {
        // do something with error
    }
};

export default signUp;

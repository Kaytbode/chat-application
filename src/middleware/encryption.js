import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const encryptPassword = async(password)=> {
    const saltRounds = process.env.SALT_ROUNDS;
    const encrypted = await bcrypt.hash(password, saltRounds);

    return encrypted;
}

export default encryptPassword;

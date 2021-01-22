import db from '../database/index.js';

const findUser = async (email) => {
    const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
    }

    const result = await db.query(query);

    return result;
};

export default findUser;


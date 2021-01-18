import pool from '../database/index.js';

/*
    Object => Object
    Inserts a user(email, password) into the database
*/
const insertUser = async (email, password)=> {
    const text = 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *';
    const values = [email, password];
    
    const result = await pool.query(text, values);

    return result;
}

export default insertUser;

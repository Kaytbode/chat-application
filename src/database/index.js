import pg from 'pg';
import config from 'config';

const { Pool } = pg;
const dbConfig = config.get('dbConfig');

const pool = new Pool({
    ...dbConfig,
    password: process.env.DB_PASSWORD,
});

const db = {
    query: (text, params) => pool.query(text, params)
}

export default db;

import pg from 'pg';
import config from 'config';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const dbConfig = config.get('dbConfig');

const pool = new Pool({
    ...dbConfig,
    password: process.env.DB_PASSWORD,
});

export default pool;

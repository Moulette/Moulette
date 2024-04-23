import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'stephenchow',
  host: 'localhost',
  database: 'moulette',
  password: 'abc123',
  port: 5432,
});

export default pool;

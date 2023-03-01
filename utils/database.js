const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'wp2_demo_69',
  password: '56615829',
});

console.log('connect database', pool.options.database);

module.exports = pool;

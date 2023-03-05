const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db.ufpyfzqptcdbelaugszo.supabase.co',
  port: '5432',
  database: 'postgres',
  password: '1qaz@WSX56615829',
});

console.log(
  `Connecting  local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
);

module.exports = pool;

const { Pool } = require('pg');

let pool;

if (process.env.NODE_ENV === 'SUPABASE') {
  pool = new Pool({
    user: 'postgres',
    host: process.env.SUPABASE_HOST,
    port: '5432',
    database: 'postgres',
    password: process.env.SUPABASE_PASSWORD,
  });
  console.log(
    `Connecting  local SUPABASEF PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'postgres',
    password: '1qaz@WSX56615829',
  });
  console.log(
    `Connecting  local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
}

module.exports = pool;

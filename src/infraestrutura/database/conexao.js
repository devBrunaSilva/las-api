// const mysql = require("mysql");

// const DBHOST = process.env.DBHOST;
// const DBPORT = process.env.DBPORT;
// const DBUSER = process.env.DBUSER;
// const DBPASS = process.env.DBPASS;
// const DBNAME = process.env.DBNAME;

// const pool = mysql.createPool({
//   connectionLimit: 100,
//   host: DBHOST || "us-cdbr-east-05.cleardb.net",
//   port: DBPORT || 3306,
//   user: DBUSER || "b1a20caa8a7e57",
//   password: DBPASS || "743587a1",
//   database: DBNAME || "heroku_0aebb3ad8200bc7",
// });

// module.exports = pool;

const mysql = require("mysql");

const DBHOST = process.env.DBHOST;
const DBPORT = process.env.DBPORT;
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;
const DBNAME = process.env.DBNAME;

const localConfig = {
  connectionLimit: 100,
  host: DBHOST || "localhost",
  port: DBPORT || 3306,
  user: DBUSER || "las",
  password: DBPASS || "admin",
  database: DBNAME || "las",
};

const pool = mysql.createPool(process.env.DATABASE_URL || localConfig);

module.exports = pool;

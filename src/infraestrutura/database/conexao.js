const mysql = require("mysql");

const DBHOST = process.env.DBHOST;
const DBPORT = process.env.DBPORT;
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;
const DBNAME = process.env.DBNAME;

const localConfig = {
  connectionLimit: 100,
  host: DBHOST || "us-cdbr-east-05.cleardb.net",
  port: DBPORT || 3306,
  user: DBUSER || "b64f11391cba25",
  password: DBPASS || "0da1f4cb",
  database: DBNAME || "heroku_3c1ad05566789c1",
};

const pool = mysql.createPool(process.env.DATABASE_URL || localConfig);

module.exports = pool;

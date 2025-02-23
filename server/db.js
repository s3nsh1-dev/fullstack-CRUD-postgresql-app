const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "car_data",
  password: "postgresql123",
  port: 5432,
});

module.exports = pool;

/**

this snipper is used to run query in postgresql database

const createTableQuery = `ALTER TABLE YTdemo
ADD COLUMN userid SERIAL PRIMARY KEY,
ADD COLUMN username VARCHAR(255) NOT NULL,
ADD COLUMN password VARCHAR(255) NOT NULL;`;

pool
.query(createTableQuery)
.then((response) => {
    console.log("Connected to PostgreSQL database");
    console.log(response);
})
.catch((err) => {
    console.log(err);
});
*/

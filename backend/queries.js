const { Pool } = require('pg')
// We can ommit this database option if no database present.
// after creating database we have to add here
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee',
    password: 'root',
    port: 5432,
});

function createConnection() {
    pool.connect((err) => {
        if (!err) {
            console.log("Database Connected");
            // createDatabase()
            createEmployeeTable()
        } else {
            console.log("Connection Failed", err);
        }
    })
}

function createDatabase() {
    pool.query("CREATE DATABASE employee", (err, result) => {
        if (!err) {
            console.log("Database created");
        } else {
            console.log('this is the err in Database creation:', err);
        }
    })
}

function createEmployeeTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS "employee" (
	    "id" SERIAL,
        "code" VARCHAR(100) NOT NULL,
        "name" VARCHAR(100) NOT NULL,
        "departmet" VARCHAR(100) NOT NULL,
        "gender" VARCHAR(100) NOT NULL,
        bod TIMESTAMPTZ,
        joining_date TIMESTAMPTZ,
        "prev_experience" INT,
        "salary" INT,
        "address" VARCHAR(255) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

    pool.query(sql, (err, result) => {
        if (!err) {
            console.log("employee table created!")
        } else {
            console.log("this is the err of employee table creation:", err);
        }
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

createConnection();

module.exports = {
    getUsers
}

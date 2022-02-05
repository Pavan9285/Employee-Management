const express = require("express");
const router = express.Router();
const { Pool } = require('pg');

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
	    id SERIAL,
        code VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        departmet VARCHAR(100) NOT NULL,
        gender VARCHAR(100) NOT NULL,
        bod DATE,
        joining_date DATE,
        prev_experience INT,
        salary INT,
        address VARCHAR(255) NOT NULL,
	    PRIMARY KEY (id)
    );`;

    pool.query(sql, (err, result) => {
        if (!err) {
            console.log("employee table created!")
        } else {
            console.log("this is the err of employee table creation:", err);
        }
    })
}

router.get('/employees', (req, res) => {
    let query = `SELECT * FROM employee`;
    pool.query(query, (err, result) => {
        !err ? res.status(200).send(result.rows) : res.status(500).send(err.message);
    })
});

router.post('/register', (req, res) => {
    const { code, name, departmet, gender, bod, joining_date, prev_experience, salary, address } = req.body;
    let query = `insert into employee(code,name,departmet,gender,bod,joining_date,prev_experience,
        salary,address)values('${code}',
        '${name}','${departmet}',
        '${gender}','${bod}',
        '${joining_date}','${prev_experience}',
        '${salary}','${address}')`;

    pool.query(query, (err, result) => {
        !err ? res.status(200).send(result) : res.status(500).send(err.message)
    })
});

router.put('/register', (req, res) => {
    // console.log("req body:", req.body);
    const { id, code, name, departmet, gender, bod, joining_date, prev_experience, salary, address } = req.body;
    let query = `update employee set code='${code}',name='${name}',departmet='${departmet}',
    gender='${gender}',bod='${bod}',joining_date='${joining_date}',
    prev_experience='${prev_experience}',salary='${salary}',address='${address}'
    where id='${id}';`

    pool.query(query, (err, result) => {
        !err ? res.status(200).send(result) : res.status(500).send(err.message)
    })
});

router.delete("/employee/delete/:id", (req, res) => {
    let query = `delete from employee WHERE id='${req.params.id}';`
    pool.query(query, (err, result) => {
        !err ? res.status(200).send(result) : res.status(500).send(err.message)
    })
});

router.get("/employees/:id", (req, res) => {
    let query = `select * from employee where id=${req.params.id}`;
    pool.query(query, (err, result) => {
        !err ? res.status(200).send(result.rows) : res.status(500).send(err.message)
    })
})

createConnection();

module.exports = router;
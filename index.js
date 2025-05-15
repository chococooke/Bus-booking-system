require("dotenv").config();
const express = require("express");
const mysql2 = require("mysql2");

const { busTableCreation, bookingsTableCreation, paymentsTableCreation, userTableCreation } = require('./tables.js');

const app = express();

const connection = mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_UNAME,
    password: process.env.MYSQL_PASSWD,
    database: 'testDB',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected sql")
    }
});

function createTables() {
    try {
        connection.execute(userTableCreation, () => {
            console.log("Created user table");
        });
        connection.execute(busTableCreation, () => {
            console.log("Created bus table");
        });
        connection.execute(bookingsTableCreation, () => {
            console.log("Created bookings table");
        });
        connection.execute(paymentsTableCreation, () => {
            console.log("Created payments table");
        });
    } catch (err) {
        console.log(err);
    }
}

createTables();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000",)
})
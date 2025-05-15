require("dotenv").config();
const express = require("express");
const mysql2 = require("mysql2");
const userRouter = require("./routes/userRoutes.js");
const busRouter = require("./routes/busRoutes.js");


const app = express();
app.use("/users", userRouter);
app.use("/bus", busRouter);


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

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000",)
})

module.exports = connection;
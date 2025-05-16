require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const busRouter = require("./routes/busRoutes.js");
const User = require("./models/User.js");
const Bus = require("./models/Bus.js");

const app = express();
app.use("/users", userRouter);
app.use("/bus", busRouter);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000",)
});
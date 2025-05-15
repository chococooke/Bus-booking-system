const connection = require("../index.js");

function addNewUser(req, res) {
    try {
        const { id, name, email } = req.body;
        const query = `INSERT INTO user (id, name, email)
        VALUES(?, ?, ?)`;

        connection.execute(query, [id, name, email]);

        res.send("Added new user successfully");
    } catch (err) {
        res.send("Something went wrong");
        console.log(err);
    }
}

async function getUsers(req, res){
    try{
        const query = `SELECT * FROM user`;

        const response = await connection.execute(query);
    } catch(err){
        res.send("something went wrong");
        console.log(err);
    }
}

module.exports = {addNewUser, getUsers};
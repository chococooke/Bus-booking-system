const connection = require("../index.js");

function addBus(req, res) {
    const { id, busNumber, totalSeats, availableSeats } = req.body;

    const query = `INSERT INTO bus (id, busNumber, totalSeats, availableSeats) VALUES (?, ?, ?, ?)`;
    connection.execute(query, [id, busNumber, totalSeats, availableSeats], (err, results) => {
        if (err) {
            console.error("Error adding bus:", err);
            return res.status(500).json({ error: "Failed to add bus." });
        }
        res.status(201).json({ message: "Bus added successfully.", busId: id });
    });
}


function getAvailableSeates(req, res) {
    const minSeats = parseInt(req.params.seats);

    const query = `SELECT * FROM bus WHERE availableSeats > ?`;
    connection.execute(query, [minSeats], (err, results) => {
        if (err) {
            console.error(err);
            return res.send("Something went wront");
        }
        res.json(results);
    });
}

module.exports = { getAvailableSeates, addBus };

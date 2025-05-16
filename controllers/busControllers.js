const Bus = require("../models/Bus.js");
const { Op } = require("sequelize");

async function addBus(req, res) {
    const { busNumber, totalSeats, availableSeats } = req.body;

    try {
        await Bus.create({ busNumber, totalSeats, availableSeats });
        console.log("Added new bus successfully");
        return res.send("Added new bus successfully");
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong");
    }
}


async function getBusesWithRequestedSeats(req, res) {
    const minSeats = parseInt(req.params.seats);
    try {
        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: minSeats
                }
            }
        });

        return res.json(buses);
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong");
    }
}

module.exports = { getBusesWithRequestedSeats, addBus };
const { DataTypes } = require("sequelize");
const sequelize = require("../config/initDB.js");

const Bus = sequelize.define("Bus", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    busNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availableSeats: {
        type: DataTypes.INTEGER
    }
});

(async () => {
    try {
        sequelize.sync();
    } catch (err) {
        console.log(err);
    }
})();

module.exports = Bus;
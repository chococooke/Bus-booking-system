const { DataTypes } = require("sequelize");
const sequelize = require("../config/initDB.js");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await User.sync();
    } catch (err) {
        console.log(err.message);
    }
})();

module.exports = User;
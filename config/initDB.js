const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

console.log(process.env.MYSQL_UNAME);

const sequelize = new Sequelize('bookingsDB', process.env.MYSQL_UNAME, process.env.MYSQL_PASSWD, {
    host: 'localhost',
    dialect: "mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established");
    } catch (err) {
        console.error("Unable to connect to the database", err);
    }
})();

module.exports = sequelize;
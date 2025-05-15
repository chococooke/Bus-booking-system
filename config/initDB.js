const connection = require("./index.js");
const { busTableCreation, bookingsTableCreation, paymentsTableCreation, userTableCreation } = require('./tables.js');


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
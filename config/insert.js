const connection = require("./index.js");

function insertSampleUsers() {
    const users = [
        { name: 'Alice Smith', email: 'alice.smith@example.com' },
        { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
        { name: 'Charlie Brown', email: 'charlie.brown@example.com' },
    ];

    users.forEach(user => {
        const query = `INSERT INTO user (name, email) VALUES (?, ?)`;
        connection.execute(query, [user.name, user.email], (err, results) => {
            if (err) {
                console.error("Error inserting sample user:", user.name, err);
            } else {
                console.log(`Inserted user: ${user.name} with ID ${results.insertId}`);
            }
        });
    });
}

function insertSampleBuses() {
    const buses = [
        { id: 101, busNumber: 1234, totalSeats: 40, availableSeats: 40 },
        { id: 102, busNumber: 5678, totalSeats: 30, availableSeats: 30 },
        { id: 103, busNumber: 9012, totalSeats: 45, availableSeats: 45 },
    ];

    buses.forEach(bus => {
        const query = `INSERT INTO bus (id, busNumber, totalSeats, availableSeats) VALUES (?, ?, ?, ?)`;
        connection.execute(query, [bus.id, bus.busNumber, bus.totalSeats, bus.availableSeats], (err) => {
            if (err) {
                console.error("Error inserting sample bus:", bus.busNumber, err);
            } else {
                console.log(`Inserted bus: ${bus.busNumber}`);
            }
        });
    });
}

function insertSampleBookings() {
    const bookings = [
        { seatNumber: 5 },
        { seatNumber: 12 },
        { seatNumber: 25 },
    ];

    bookings.forEach(booking => {
        const query = `INSERT INTO booking (seatNumber) VALUES (?)`;
        connection.execute(query, [booking.seatNumber], (err, results) => {
            if (err) {
                console.error("Error inserting sample booking:", booking.seatNumber, err);
            } else {
                console.log(`Inserted booking with ID ${results.insertId}, seat ${booking.seatNumber}`);
            }
        });
    });
}

function insertSamplePayments() {
    const payments = [
        { amountPaid: 150, paymentStatus: 'completed' },
        { amountPaid: 200, paymentStatus: 'pending' },
        { amountPaid: 175, paymentStatus: 'completed' },
    ];

    payments.forEach(payment => {
        const query = `INSERT INTO payment (amountPaid, paymentStatus) VALUES (?, ?)`;
        connection.execute(query, [payment.amountPaid, payment.paymentStatus], (err, results) => {
            if (err) {
                console.error("Error inserting sample payment:", payment.amountPaid, err);
            } else {
                console.log(`Inserted payment with ID ${results.insertId}, amount ${payment.amountPaid}, status ${payment.paymentStatus}`);
            }
        });
    });
}

insertSampleBookings();
insertSampleBuses();
insertSamplePayments();
insertSampleUsers();
// module.exports = {insertSampleBookings, insertSampleUsers, insertSampleBuses, insertSamplePayments};
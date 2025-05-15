const busTableCreation = `CREATE TABLE bus(
    id INT PRIMARY KEY, 
    busNumber INT NOT NULL,
    totalSeats INT, 
    availableSeats INT
)`;

const userTableCreation = `CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
)`;

const bookingsTableCreation = `CREATE TABLE booking(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    seatNumber INT NOT NULL
)`;

const paymentsTableCreation = `CREATE TABLE payment(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    amountPaid INT NOT NULL, 
    paymentStatus VARCHAR(10) DEFAULT "pending"
)`;

module.exports = { busTableCreation, userTableCreation, bookingsTableCreation, paymentsTableCreation };
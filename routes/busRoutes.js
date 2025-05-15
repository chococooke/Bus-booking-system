const router = require('express').Router();

app.get("/available/:seats", (req, res) => { getAvailableSeates(req, res) });
app.post("/", (req, res) => { addBus(req, res) });

module.exports = router;
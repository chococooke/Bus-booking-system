const router = require('express').Router();
const { getBusesWithRequestedSeats, addBus } = require("../controllers/busControllers.js")

router.get("/available/:seats", (req, res) => { getBusesWithRequestedSeats(req, res) });
router.post("/", (req, res) => { addBus(req, res) });

module.exports = router;
const { getUsers, addNewUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", (req, res) => getUsers(req, res));
router.post("/", (req, res) => addNewUser(req, res));

module.exports = router;
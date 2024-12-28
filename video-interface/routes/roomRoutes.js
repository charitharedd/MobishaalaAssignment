const express = require("express");
const { createRoom, listRooms, generateToken } = require("../controllers/roomController");
const router = express.Router();

router.post("/rooms", createRoom);
router.get("/rooms", listRooms);
router.post("/rooms/:roomId/token", generateToken);

module.exports = router;

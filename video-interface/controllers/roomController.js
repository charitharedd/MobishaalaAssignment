const Room = require("../models/Room");
const { createRoom, generateToken } = require("../services/100msService");

exports.createRoom = async (req, res) => {
  try {
    const { name } = req.body;
    const roomData = await createRoom(name);
    const room = new Room({
      roomId: roomData.id,
      name: roomData.name,
      participantCount: 0,
    });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.generateToken = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { role } = req.body;
    const token = await generateToken(roomId, role);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

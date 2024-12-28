const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  participantCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Room", roomSchema);

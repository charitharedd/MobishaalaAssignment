const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  participantId: { type: String, required: true, unique: true },
  roomId: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, enum: ["joined", "left"], default: "joined" },
});

module.exports = mongoose.model("Participant", participantSchema);

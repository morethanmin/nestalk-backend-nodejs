const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: 'Room Name is required',
  },
});

const model = mongoose.model('Room', RoomSchema);
module.exports = model;

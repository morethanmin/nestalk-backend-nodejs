const mongoose = require('mongoose');

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ChatSchema = new mongoose.Schema({
  userId: String,
  message: {
    type: String,
    required: 'Message Content is required',
  },
  createdAt: {
    type: String,
    default: `${monthNames[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`,
  },
  room: [
    {
      type: Schema.Types.ObjectId,
      ref: 'room',
    },
  ],
});

const model = mongoose.model('Chat', ChatSchema);
module.exports = model;

const mongoose = require('mongoose');

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ChatSchema = new mongoose.Schema(
  {
    userId: String,
    message: {
      type: String,
      required: 'Message Content is required',
    },
    room: [
      {
        type: Schema.Types.ObjectId,
        ref: 'room',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('Chat', ChatSchema);
module.exports = model;

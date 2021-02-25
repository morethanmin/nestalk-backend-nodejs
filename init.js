const app = require('./app');
const dotenv = require('dotenv');
const socketIO = require('socket.io');
dotenv.config();

const PORT = process.env.PORT || 3000;

// Listen Port
function handleListening() {
  console.log(`✅ Listening at: http://localhost:${PORT}`);
}
const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log(`✅ Server connected successfully`);
  socket.on('newMessage', ({ message }) => {
    socket.broadcast.emit('messageNotification', { message, nickname: socket.nickname || 'Anon' });
  });
  socket.on('error', (error) => {
    console.log(error);
  });
  socket.on('close', () => {
    console.log('클라이언트 접속 해제', ip);
  });
  socket.on('setNickname', ({ nickname }) => {
    socket.nickname = nickname;
  });
});

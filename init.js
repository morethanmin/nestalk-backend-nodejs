const app = require('./app');
const db = require('./db');
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
  // IP 정보
  const req = socket.request;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`✅ Server connected successfully`, ip, socket.id);
  // 클라이언트로부터 메시지 수신
  socket.on('newMessage', ({ message }) => {
    socket.broadcast.emit('messageNotification', { message, nickname: socket.nickname || 'Anon' });
  });
  // 에러
  socket.on('error', (error) => {
    console.log(error);
  });
  // 연결 종료
  socket.on('disconnect', () => {
    console.log('❌ 클라이언트 접속 해제', ip, socket.id);
  });
  // 닉네임 설정
  socket.on('setNickname', ({ nickname }) => {
    socket.nickname = nickname;
  });
});

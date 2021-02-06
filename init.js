const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

// Listen Port
function handleListening() {
  console.log(`✅ Listening at: http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);

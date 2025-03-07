const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { readdirSync } = require('fs');

const cors = require('cors');

app.use(express.json());
// app.use(cors(options));
// app.use(cors());

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://deventiatech.com',
    'https://www.deventiatech.com',
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// import all routes
try {
  const routes = readdirSync('./Routes');
  routes.map((r) => app.use('/', require('./Routes/' + r)));
} catch (err) {
  console.error('Error reading routes directory:', err);
}
// database
mongoose
  .connect(
    'mongodb+srv://asgharkhanglipton:zZgDPYCBB59ia4iy@cluster0.7ipdy2j.mongodb.net/deventia'
  )
  .then(() => console.log('database connection successfully'))
  .catch((err) => console.log(`error connecting to mongodb ${err}`));

  app.get('/test', (req, res) => {
    res.json({ message: 'Test route is working!' });
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

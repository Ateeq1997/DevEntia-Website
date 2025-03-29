const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import routes
const mailRoutes = require('./Routes/mail.js');
const loginRoutes = require('./Routes/login.js');
const jobApplyRoutes = require('./Routes/jobApply.js');
const jobRoutes = require('./Routes/job.js');

const cors = require('cors');

app.use(express.json());

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

// Use routes explicitly
app.use('/', mailRoutes);
app.use('/', loginRoutes);
app.use('/', jobApplyRoutes);
app.use('/', jobRoutes);

// database
mongoose
  .connect(
    'mongodb+srv://asgharkhanglipton:zZgDPYCBB59ia4iy@cluster0.7ipdy2j.mongodb.net/deventia'
  )
  .then(() => console.log('database connection successfully'))
  .catch((err) => console.log(`error connecting to mongodb ${err}`));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const contactRoutes = require('./Routes/contact');


const mongoose = require('mongoose');
const app = express();

// Validate required environment variables early
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('Missing MONGO_URI or MONGODB_URI. Ensure a .env file exists in the Backend directory.');
  process.exit(1);
}

// Import routes
const mailRoutes = require('./Routes/mail.js');
const loginRoutes = require('./Routes/login.js');
const jobApplyRoutes = require('./Routes/jobApply.js');
const jobRoutes = require('./Routes/job.js');
const blogRoutes = require('./Routes/BlogRoute');

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: [
    '*',
    'http://localhost:3000',
    'https://deventiatech.com',
    'https://www.deventiatech.com',
    'https://dev.deventiatech.com',
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
app.use('/', blogRoutes);
app.use('/api/contact', contactRoutes);

// database
mongoose
  .connect(
    mongoUri
  )
  .then(() => console.log('database connection successfully'))
  .catch((err) => console.log(`error connecting to mongodb ${err}`));

  app.get('/test', (req, res) => {
    res.json({ message: 'Test route is working!' });
});
app.get('/health', (req, res) => res.sendStatus(200));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

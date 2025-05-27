const express = require('express');
const sendMail = require('../controller/mail/sendMail');

const router = express.Router();

// send acknowledgment email
router.post('/mail', sendMail);

module.exports = router;

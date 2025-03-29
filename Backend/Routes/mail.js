const express = require('express');
const sendMail = require('../controller/mail/sendMail');

const router = express.Router();

router.post('/mail', sendMail);

module.exports = router;

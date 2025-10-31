const express = require('express');
const { sendMail, getSubscribers } = require("../controller/mail/sendMail");

const router = express.Router();

// send acknowledgment email
router.post('/mail', sendMail);
router.get("/subscribers", getSubscribers);

module.exports = router;

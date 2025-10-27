const express = require('express');
const { handleContactForm } = require('../controller/contact/contact');

const router = express.Router();

// POST /api/contact
router.post('/', handleContactForm);

module.exports = router;

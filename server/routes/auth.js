const express = require('express');
const router = express.Router();

// import controllers
const { register } = require('../controllers/auth.js');

// Routes
router.get('/register', register);

module.exports = router;
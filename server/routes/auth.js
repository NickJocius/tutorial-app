const express = require('express');
const router = express.Router();

// import middleware
const { userRegisterValidator } = require('../middleware/auth')
const {runValidation} = require('../middleware')

// import controllers
const { register } = require('../controllers/auth.js');

// Routes
router.post('/register',userRegisterValidator,runValidation, register);

module.exports = router;
// routes/auth.js
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/login', authController.checkCredentials);

module.exports = router;
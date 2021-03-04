const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/user');
const checkSecurityPassword = require('../middleware/checkSecurityPassword');

router.post('/signup',checkSecurityPassword ,authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;

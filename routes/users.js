const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.post('/users', userController.createUser);

module.exports = router;
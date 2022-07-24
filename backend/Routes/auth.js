const router = require('express').Router();
const authController = require('../controllers/authController');


router.post('/register', authController.getRegistered);

router.post('/login', authController.getLoggedIn);

router.get('/user-profile/:_id', authController.getUserProfile);

router.get('/users', authController.getAllUsers);

module.exports = router;
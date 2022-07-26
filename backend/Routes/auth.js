const router = require('express').Router();
const authController = require('../Controllers/auth');


const jwtHelper = require('../config/jwtHelper');




router.post('/register', authController.register);
router.post('/authenticate', authController.authenticate);

router.get('/userProfile',jwtHelper.verifyJwtToken, authController.userProfile);

module.exports = router;



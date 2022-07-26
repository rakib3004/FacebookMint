const router = require('express').Router();
const authController = require('../Controllers/auth');


router.post('/register', authController.register);

router.post('/authenticate', authController.authenticate);


module.exports = router;


 
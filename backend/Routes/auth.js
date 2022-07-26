const router = require('express').Router();
const authController = require('../controllers/authController');


router.post('/register', authController.getRegistered);

router.post('/login', authController.getLoggedIn);

router.get('/user-profile/:_id', authController.getUserProfile);

router.get('/users', authController.getAllUsers);

module.exports = router;


const express = require('express');

const ctrlUser = require('../Controllers/auth');
const jwtHelper = require('../config/jwtHelper');




router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);

router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;



const express = require('express');
const app = express();
const router = require('express').Router();
const statusModels = require('../Models/status');
const statusController = require('../Controllers/status');





router.post('/status', homeController.postStatus);

router.get('/status', homeController.getStatus);



module.exports = router;
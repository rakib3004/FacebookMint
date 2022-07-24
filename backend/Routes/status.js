const express = require('express');
const app = express();
const router = require('express').Router();
const statusModels = require('../Models/status');
const statusController = require('../Controllers/status');

router.post('/status', statusController.postStatus);

router.get('/status', statusController.getStatus);


module.exports = router;
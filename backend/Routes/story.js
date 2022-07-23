const express = require('express');
const app = express();
const router = require('express').Router();
const storyModels = require('../Models/story');
const storyController = require('../Controllers/story');


router.post('/story', storyController.postStory);

router.get('/story', storyController.getStory);

module.exports = router;
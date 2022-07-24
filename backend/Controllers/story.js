const router = require('express').Router();
const story = require('../Models/story');




exports.postStory = (async (req, res) => {
    //Create a new post
    const newPost = new story({
        name: req.body.name,
        post: req.body.post,
       
    });
    try {
        const savedPost = await newPost.save();
        res.send({ post: newPost.post });
        console.log(savedPost);
    } catch (err) {
        res.status(400).send({ Fail: 'Cannot post the content' });
    }
});

exports.getStory = (async (req, res) => {

    try {
       
        const allStory = await story.find({});      
        res.send(allStory);
        console.log(allStory)
    } catch (err) {
        res.status(400).send({ Fail: 'Storyes not found' });
    }

});


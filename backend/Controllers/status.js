const router = require('express').Router();
const status = require('../Models/status');



exports.postStatus = (async (req, res) => {
    //Create a new post
    const newPost = new status({
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

exports.getStatus = (async (req, res) => {

    try {
       
        const allStatus = await status.find();      
        console.log(allStatus);
        
        res.json(allStatus);
        // console.log(allStatus)
    } catch (err) {
        res.status(400).send({ Fail: 'Statuses not found' });
    }

});


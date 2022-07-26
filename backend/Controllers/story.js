const mongoose = require('mongoose');
var Minio = require("minio");
var story = require('../Models/story');
const crypto = require('crypto');

module.exports.postStory = (async (req, res) => {
    //connect to minio
    const minioClient = new Minio.Client({
        endPoint: '127.0.0.1',
        port: 9000,
        useSSL: false,
        accessKey: 'ulDoUo3BcZ0HK4P4',
        secretKey: 'JH4f31eN8YAg9kn3BQUsh3cuoVGPNedo'
    });

    var uuidName = crypto.randomUUID();
    console.log(JSON.stringify(req.file))
    minioClient.fPutObject('story', uuidName, req.file.path, function (err, objInfo) {
        if(err) {return console.log(err)}
    });

    //Create a new story and save to mongodb
    const newStory = new story({
        email: req.body.email,
        storyUUID: uuidName
    });

    try {
        const savedStory = await newStory.save();
        res.send({ ResponeseMessage: 'Story file Uploaded Successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports.getStory = (async (req,res) =>{
    try{
        const Stories = await story.find({email:{$ne: req.params.currentUser}}).sort({$natural:-1}).limit(10); 
        res.send(Stories);
    } catch(err){
        res.status(400).send({ResponeseMessage: 'Missing Image File'});
    }
});
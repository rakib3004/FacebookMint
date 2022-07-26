const mongoose = require('mongoose');
var status = require('../Models/status');

module.exports.postStatus = (req, res, next) => {
    // call for passport authentication
    var newStatus = new Status({
        email: req.body.email,
        text: req.body.text,
        time: Date.now()
    });
  
    let promise = newStatus.save();

    promise.then((doc=>{
        return res.status(201).json(doc);
    }))
  
    promise.catch((err=>{
        return res.status(501).json(err);
    }))
}

module.exports.getStatus = (req, res, next) => {
    console.log(req.params.currentUser);
    let postList = status.find({email:{$ne: req.params.currentUser}}).limit(10).sort({$natural:-1});
    postList.exec((req, doc) =>{
        return res.status(200).json(doc);
    })
}
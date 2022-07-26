const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
require('../Models/user');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Email address already used!!!!']);
            else
                return next();
        }
    });
}


module.exports.authenticate = (req, res) => {
    hashPass = req.body.pass
    User.findOne
    // call for passport authentication
    // passport.authenticate('local', (err, user, info) => {   
    //     console.log('Auth Controllers')    
    //     // error from passport middleware
    //     if (err) return res.status(400).json(err);
    //     // registered user
    //     else if (user) return res.status(200).json({ "token": user.generateJwt(),"currentUser":req.body.email });
        
    //     // unknown user or wrong password
    //     else return res.status(404).json(info);
    // })(req, res);
}


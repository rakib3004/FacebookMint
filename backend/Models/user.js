const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 4
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 8
    },
    dob:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);
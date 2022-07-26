var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email : {type:String, require:true},
    text:{type:String, require:true},
    time:{type:Date, require:true}
});

module.exports = mongoose.model('status',schema);
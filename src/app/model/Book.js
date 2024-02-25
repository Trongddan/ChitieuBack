const mongoose = require('mongoose');
const Book = mongoose.Schema({
    name:{type:String, required:true},
    des:{type:String, required:true},
    quantity:{type:Number,default:0}
})
module.exports = mongoose.model("book", Book)
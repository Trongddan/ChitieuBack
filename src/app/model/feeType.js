const mongoose = require('mongoose');
const FeeType =new mongoose.Schema({
    name:{type:String,required:true,unique:true}
},{timestamps:true})
module.exports = mongoose.model("feetype",FeeType)
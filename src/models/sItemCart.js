const mongoose = require("mongoose");

const sItemCartSchema = mongoose.Schema({
    pName : {
        type:String,
        required : true
    },
    pCompany:{
        type : String,
        required : true
    },
    pImage :{
        type:String,
        required : true 
    },
    pDescription : {
        type: String,
        required: true
    },
    pCost : {
        type : String,
        required : true
    },
    pCount :{
        type :String,
        required : true
    },
    email :{
        type : String,
        required : true
    }
},{timestamps : false});

module.exports = mongoose.model("sItemCart",sItemCartSchema);
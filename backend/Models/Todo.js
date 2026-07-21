const { default: mongoose } = require("mongoose");
const types = require("../types");


// const mongoose = require(mongoose)

const todoScehma = new mongoose.Schema({
    title : {
        type : String ,
        required : true ,
        trim : true
    },

    description : {
        type : String ,
        trim : true
    }
    ,
    completed : {
        type : Boolean ,
        default : false

    } ,
    
}
,  {
        timestamps : true
    }
);

module.exports = mongoose.model(
    "Todo" , todoScehma
);



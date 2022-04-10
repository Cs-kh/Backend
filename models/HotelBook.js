const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const roomSchema = new Schema({
    HotelId:{
        type:String,
        required:true
    },
    roomId:{
        type:String,
        required:true
    },
    roomName:{
        type:String,
        required:true
    },
    roomPrice:{
        type:Number,
        required:true
    },
    roomDescription:{
        type:String,
        required:true
    },
    roomType:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    }
});



module.exports = mongoose.model("Book",roomSchema);
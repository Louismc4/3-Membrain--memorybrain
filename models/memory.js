var mongoose = require("mongoose");

var memorySchema = new mongoose.Schema({
    main : {
        color_primary : Number,
        color_secondary : Number, 
        rgb : Boolean,
        title : String, 
        price : Number,
        rating : Number,
        led : Boolean,
        warranty : Number, 
        brand : Number
    },
    memory : {
        memory_type : String,
        modules : Number, 
        capacity : Number, 
        speed : Number,
        heatsink : Boolean,
        ecc : Boolean
    },
    idx : {
        verify : String,
        mxid : String
    }
}, { collection : 'memory' });

module.exports = mongoose.model("memory", memorySchema);
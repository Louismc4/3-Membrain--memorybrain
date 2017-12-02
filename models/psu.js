var mongoose = require("mongoose");

var psuSchema = new mongoose.Schema({
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
    'psu' : { 
        digital_monitor : Boolean, 
        wattage : Number, 
        fan : Boolean, 
        psu_size : String,
        psu_len : Number, 
        modular : Boolean, 
        efficiency : String
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'psu' });

module.exports = mongoose.model("psu", psuSchema);
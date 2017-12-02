var mongoose = require("mongoose");

var coolerSchema = new mongoose.Schema({
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
    'cooler' : { 
        fan_size : Number, 
        cooler_height : Number, 
        fan_rpm : Number, 
        fans_supported : Number, 
        air_pressure : Number, 
        sound_level : Number,
        air_flow : Number, 
        tdp : Number, 
        fans_included : Number, 
        sockets : Array
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'cooler' });

module.exports = mongoose.model("cooler", coolerSchema);
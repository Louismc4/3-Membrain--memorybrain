var mongoose = require("mongoose");

var waterSchema = new mongoose.Schema({
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
    'water' : { 
        rad_size : Number, 
        sound_level : Number,
        sockets : Array, 
        fans_supported : Number,
        air_pressure : Number, 
        fan_rpm : Number, 
        fan_size : Number,
        fan_included : Number,
        air_flow : Number
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'water' });

module.exports = mongoose.model("water", waterSchema);
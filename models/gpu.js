var mongoose = require("mongoose");

var gpuSchema = new mongoose.Schema({
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
    'gpu' : { 
        minimum_power : Number, 
        score_3d : Number, 
        displayport : Boolean, 
        vram_speed : Number,
        slots : Number, 
        benchmark : String, 
        length : Number,
        dvi : Boolean, 
        tdp : Number, 
        hdmi : Boolean, 
        cores : Number,
        turbo_clock : Number,
        blower : Boolean,
        score_2d : Number,
        vram : Number
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'gpu' });
 

module.exports = mongoose.model("gpu", gpuSchema);

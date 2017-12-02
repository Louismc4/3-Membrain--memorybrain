var mongoose = require("mongoose");

var caseSchema = new mongoose.Schema({
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
    'case' : { 
        psu_cover : Boolean, 
        psu_included : Number, 
        max_radiator : Number, 
        rear : Number, 
        front : Number, 
        'window' : Boolean,
        bottom : Number, 
        top : Number, 
        "525_slots" : Number, 
        expansion_slots : Number, 
        psu_length : Number, 
        "35_slots" : Number,
        rad_mounts : String, 
        cooler_height : Number, 
        usb31 : Boolean,
        glass : Boolean,
        "25_slots" : Number,
        form_factor : String, 
        psu_size : String,
        usb2 : Boolean, 
        gpu_length : Number,
        usb3 : Boolean 
        
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'case' });

module.exports = mongoose.model("case", caseSchema);
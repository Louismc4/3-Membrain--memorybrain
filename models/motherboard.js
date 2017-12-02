var mongoose = require("mongoose");

var motherboardSchema = new mongoose.Schema({
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
    idx : {
        mxid : String,
        verify : String
    },
    motherboard : {
        mem_speed : Number,
        dimms : Number, 
        igpu : Boolean, 
        socket : String,
        usb31 : Boolean,
        gpus : Number,
        sata : Number,
        shielding : Boolean, 
        form_factor : String, 
        m2 : Boolean,
        pcie_support : Boolean, 
        memory_type : String,
        oc_ready : Boolean
    }
}, { collection : 'motherboard' });

module.exports = mongoose.model("motherboard", motherboardSchema);

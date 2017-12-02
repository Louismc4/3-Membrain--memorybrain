var mongoose = require("mongoose");

var cpuSchema = new mongoose.Schema({
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
    'cpu' : { 
        unlocked : Boolean, 
        memory_type : String, 
        socket : String, 
        benchmark : Number,
        threads : Number, 
        pcie_lanes : Number, 
        tdp : String,
        cooler : Boolean, 
        cores : Number, 
        single_thread : String, 
        turbo_clock : Number,
        core_clock : Number,
        multi_thread : String
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'cpu' });

module.exports = mongoose.model("cpu", cpuSchema);

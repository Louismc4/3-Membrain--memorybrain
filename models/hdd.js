var mongoose = require("mongoose");

var hddSchema = new mongoose.Schema({
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
    'hdd' : { 
        hdd_size : Number, 
        write_speed : Number, 
        ssd : Boolean, 
        capacity : Number,
        rpm : Number, 
        cache : Number, 
        'interface': Number,
        score : Number, 
        mtbf : Number, 
        read_speed : Number
    },
    idx : {
        mxid : String, 
        verify : String
    }
}, { collection : 'hdd' });
 

module.exports = mongoose.model("hdd", hddSchema);
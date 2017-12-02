var mongoose = require("mongoose");

var computerScheme = new mongoose.Schema({
    cost: Number,
    'case' : {
        mxid : String,
        title : String
    },
    motherboard: {
        mxid : String,
        title : String
    },
    cpu: {
        mxid : String,
        title : String
    },
    gpu: {
        mxid : String,
        title : String
    },
    psu: {
        mxid : String,
        title : String
    },
    memory: {
        mxid : String,
        title : String
    },
    cooler: {
        mxid : String,
        title : String
    }
}, { collection : 'builds' });

module.exports = mongoose.model("builds", computerScheme);
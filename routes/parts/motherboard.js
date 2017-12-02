var express       = require("express"),
    router        = express.Router(),
    motherboardSchema = require("../.././models/motherboard");
    
router.get("/motherboards", function(request, response){
    motherboardSchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get Motherboard!");
            response.redirect("/");
        } else {
            for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].motherboard.socket != undefined){
                    switch(responseBody[i].motherboard.socket){
                            case '0':
                                responseBody[i].motherboard.socket = 'LGA 1151';
                                break;
                            case '1' :
                                responseBody[i].motherboard.socket = 'LGA 2066';
                                break;
                            case '2' :
                                responseBody[i].motherboard.socket = 'LGA 2011-3';
                                break;
                            case '3' :
                                responseBody[i].motherboard.socket = 'FM2';
                                break;
                            case '5' :
                                responseBody[i].motherboard.socket = 'AM3+';
                                break;
                            case '6' :
                                responseBody[i].motherboard.socket = 'AM4';
                                break;
                            case '7' :
                                responseBody[i].motherboard.socket = 'TR4';
                                break;
                            case '9' :
                                responseBody[i].motherboard.socket = 'FM2+';
                                break;
                            default:
                                responseBody[i].motherboard.socket = '';
                                break;
                        }
                }
                if(responseBody[i].motherboard.form_factor != undefined){
                    switch(responseBody[i].motherboard.form_factor){
                        case '1' :
                            responseBody[i].motherboard.form_factor = 'mITX';
                            break;
                        case '2' :
                            responseBody[i].motherboard.form_factor = 'uATX';
                            break;
                        case '3' :
                            responseBody[i].motherboard.form_factor = 'mATX';
                            break;
                        case '4' :
                            responseBody[i].motherboard.form_factor = 'ATX';
                            break;
                        case '5' :
                            responseBody[i].motherboard.form_factor = 'EATX';
                            break;
                        case '6' :
                            responseBody[i].motherboard.form_factor = 'XLATX';
                            break;
                        default:
                            responseBody[i].motherboard.form_factor = '';
                            break;
                    }
                }
            }
            response.render("./parts/motherboard", {moboResponse : responseBody});
        }
    });
});
    
module.exports = router;
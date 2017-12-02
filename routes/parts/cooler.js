var express       = require("express"),
    router        = express.Router(),
    coolerSchema = require("../.././models/cooler");
    
router.get("/coolers", function(request, response){
    coolerSchema.find({} ,function(error,responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get Coolers!");
            response.redirect("/");
        } else {
            for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].cooler.sockets != undefined){
                    var socketString = '';
                    for(var j = 0; j < responseBody[i].cooler.sockets.length; j++){
                        switch(responseBody[i].cooler.sockets[j]){
                            case '0':
                                socketString += 'LGA 1151, ';
                                break;
                            case '1' :
                                socketString += 'LGA 2066, ';
                                break;
                            case '2' :
                                socketString += 'LGA 2011-3, ';
                                break;
                            case '3' :
                                socketString += 'FM2, ';
                                break;
                            case '5' :
                                socketString += 'AM3+, ';
                                break;
                            case '6' :
                                socketString += 'AM4, ';
                                break;
                            case '7' :
                                socketString += 'TR4, ';
                                break;
                            default:
                                socketString += '';
                                break;
                        }
                    }
                    responseBody[i].cooler.sockets = socketString;
                }
            }
            response.render("./parts/cooler", {coolerResponse : responseBody});
        }
    });
});
    
module.exports = router;
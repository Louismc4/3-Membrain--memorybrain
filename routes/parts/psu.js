var express       = require("express"),
    router        = express.Router(),
    psuSchema = require("../.././models/psu");
    
router.get("/psus", function(request, response){
    psuSchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get PSUs!");
            response.redirect("/");
        } else {
            for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].psu.efficiency != undefined){
                    switch(responseBody[i].psu.efficiency){
                        case '0' :
                            responseBody[i].psu.efficiency = 'STANDARD';
                            break;
                        case '1' :
                            responseBody[i].psu.efficiency = 'BRONZE';
                            break;
                        case '2' :
                            responseBody[i].psu.efficiency = 'SILVER';
                            break;
                        case '3' :
                            responseBody[i].psu.efficiency = 'GOLD';
                            break;
                        case '4' :
                            responseBody[i].psu.efficiency = 'PLATINUM';
                            break;
                        case '5' :
                            responseBody[i].psu.efficiency = 'TITANIUM';
                            break;
                        default:
                            responseBody[i].psu.efficiency = '';
                            break;
                    }
                }
                if(responseBody[i].psu.psu_size != undefined){
                    switch(responseBody[i].psu.psu_size){
                        case '0' :
                            responseBody[i].psu.psu_size = 'SFX';
                            break;
                        case '1' :
                            responseBody[i].psu.psu_size = 'ATX';
                            break;
                        default:
                            responseBody[i].psu.psu_size = '';
                            break;
                    }
                }
            }
            response.render("./parts/psu", {psuResponse : responseBody});
        }
    });
});
    
module.exports = router;
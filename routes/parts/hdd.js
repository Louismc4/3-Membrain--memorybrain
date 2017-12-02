var express       = require("express"),
    router        = express.Router(),
    hddSchema = require("../.././models/hdd");
    
router.get("/hdds", function(request, response){
    hddSchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get HDDs!");
            response.redirect("/");
        } else {
            for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].hdd.interface != undefined){
                    switch(responseBody[i].hdd.interface){
                        case '1' :
                            responseBody[i].hdd.interface = 'SATA';
                            break;
                        case '2' :
                            responseBody[i].hdd.interface = 'SATA 2';
                            break;
                        case '3' :
                            responseBody[i].hdd.interface = 'SATA 3';
                            break;
                        case '4' :
                            responseBody[i].hdd.interface = 'mSATA';
                            break;
                        case '5' :
                            responseBody[i].hdd.interface = 'PCIE';
                            break;
                        case '6' :
                            responseBody[i].hdd.interface = 'M.2 SATA';
                            break;
                        case '7' :
                            responseBody[i].hdd.interface = 'M.2 NVME';
                            break;
                        case '8' :
                            responseBody[i].hdd.interface = 'USB 2.0';
                            break;
                        case '9' :
                            responseBody[i].hdd.interface = 'USB 3.0';
                            break;
                        case '10' :
                            responseBody[i].hdd.interface = 'Thunderbolt';
                            break;
                        default:
                            responseBody[i].hdd.interface = '';
                            break;
                    }
                }
            }
            response.render("./parts/hdd", {hddResponse : responseBody});
        }
    });
});
    
module.exports = router;
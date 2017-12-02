var express       = require("express"),
    router        = express.Router(),
    casesSchema   = require("../.././models/case");
    
router.get("/cases", function(request, response){
    casesSchema.find({} ,function(error,responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get Cases!");
            response.redirect("/");
        } else {
            for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].case.form_factor != undefined){
                    switch(responseBody[i].case.form_factor){
                        case '1' :
                            responseBody[i].case.form_factor = 'mITX';
                            break;
                        case '2' :
                            responseBody[i].case.form_factor = 'uATX';
                            break;
                        case '3' :
                            responseBody[i].case.form_factor = 'mATX';
                            break;
                        case '4' :
                            responseBody[i].case.form_factor = 'ATX';
                            break;
                        case '5' :
                            responseBody[i].case.form_factor = 'EATX';
                            break;
                        case '6' :
                            responseBody[i].case.form_factor = 'XLATX';
                            break;
                        default:
                            responseBody[i].case.form_factor = '';
                            break;
                    }
                }
                if(responseBody[i].case.psu_size != undefined){
                    switch(responseBody[i].case.psu_size){
                        case '0' :
                            responseBody[i].case.psu_size = 'SFX';
                            break;
                        case '1' :
                            responseBody[i].case.psu_size = 'ATX';
                            break;
                        default:
                            responseBody[i].case.psu_size = '';
                            break;
                    }
                }
            }
            response.render("./parts/case", {caseResponse : responseBody}); 
        }
    });
});
    
module.exports = router;
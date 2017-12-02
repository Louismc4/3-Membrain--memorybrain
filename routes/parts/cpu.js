var express       = require("express"),
    router        = express.Router(),
    cpuSchema = require("../.././models/cpu");
    
router.get("/cpus", function(request, response){
    cpuSchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get CPUs!");
            response.redirect("/");
        } else {
            for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].cpu.socket != undefined){
                    switch(responseBody[i].cpu.socket){
                            case '0':
                                responseBody[i].cpu.socket = 'LGA 1151';
                                break;
                            case '1' :
                                responseBody[i].cpu.socket = 'LGA 2066';
                                break;
                            case '2' :
                                responseBody[i].cpu.socket = 'LGA 2011-3';
                                break;
                            case '3' :
                                responseBody[i].cpu.socket = 'FM2';
                                break;
                            case '5' :
                                responseBody[i].cpu.socket = 'AM3+';
                                break;
                            case '6' :
                                responseBody[i].cpu.socket = 'AM4';
                                break;
                            case '7' :
                                responseBody[i].cpu.socket = 'TR4';
                                break;
                            case '9' :
                                responseBody[i].cpu.socket = 'FM2+';
                                break;
                            default:
                                responseBody[i].cpu.socket = '';
                                break;
                        }
                }
                if(responseBody[i].cpu.form_factor != undefined){
                    switch(responseBody[i].cpu.memory_type){
                        case '3' :
                            responseBody[i].cpu.memory_type = 'DDR3';
                            break;
                        case '4' :
                            responseBody[i].cpu.memory_type = 'DDR4';
                            break;
                        default:
                            responseBody[i].cpu.memory_type = '';
                            break;
                    }
                }
            }
            response.render("./parts/cpu", {cpuResponse : responseBody});
        }
    });
});
    
module.exports = router;
var express       = require("express"),
    router        = express.Router(),
    memorySchema = require("../.././models/memory");
    
router.get("/memory", function(request, response){
    memorySchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get Memory!");
            response.redirect("/");
        } else {
            console.log(responseBody);for(var i = 0; i < responseBody.length; i++){
                if(responseBody[i].memory.memory_type != undefined){
                    switch(responseBody[i].memory.memory_type){
                        case '3' :
                            responseBody[i].memory.memory_type = 'DDR3';
                            break;
                        case '4' :
                            responseBody[i].memory.memory_type = 'DDR4';
                            break;
                        default:
                            responseBody[i].memory.memory_type = '';
                            break;
                    }
                }
            }
            response.render("./parts/memory", {memoryResponse : responseBody});
        }
    });
});
    
module.exports = router;
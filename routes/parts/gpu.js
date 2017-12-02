var express       = require("express"),
    router        = express.Router(),
    gpuSchema = require("../.././models/gpu");
    
router.get("/gpus", function(request, response){
    gpuSchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get GPUs!");
            response.redirect("/");
        } else {
            response.render("./parts/gpu", {gpuResponse : responseBody});
        }
    });
});
    
module.exports = router;
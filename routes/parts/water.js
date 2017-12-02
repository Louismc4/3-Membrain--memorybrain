var express       = require("express"),
    router        = express.Router(),
    waterSchema = require("../.././models/water");
    
router.get("/water", function(request, response){
    waterSchema.find({} ,function(error, responseBody){
        if(error){
            console.log(error);
            request.flash("error", "Couldn't Get Water Coolers!");
            response.redirect("/");
        } else {
            response.render("./parts/water", {waterResponse : responseBody});
        }
    });
});
    
module.exports = router;
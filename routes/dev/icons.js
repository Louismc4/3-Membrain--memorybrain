var express       = require("express"),
    router        = express.Router();
    
router.get("/icons", function(request, response){
    response.render("./dev/icons");
});
    
module.exports = router;
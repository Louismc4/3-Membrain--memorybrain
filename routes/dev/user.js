var express       = require("express"),
    router        = express.Router();
    
router.get("/user", function(request, response){
    response.render("./dev/user");
});
    
module.exports = router;
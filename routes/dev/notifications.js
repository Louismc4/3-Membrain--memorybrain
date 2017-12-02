var express       = require("express"),
    router        = express.Router();
    
router.get("/notifications", function(request, response){
    response.render("./dev/notifications");
});
    
module.exports = router;
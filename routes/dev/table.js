var express       = require("express"),
    router        = express.Router();
    
router.get("/table", function(request, response){
    response.render("./dev/table");
});
    
module.exports = router;
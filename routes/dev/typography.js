var express       = require("express"),
    router        = express.Router();
    
router.get("/typography", function(request, response){
    response.render("./dev/typography");
});
    
module.exports = router;
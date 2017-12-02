var express       = require("express"),
    app           = express(),
    mongoose      = require('mongoose'),
    bodyParser    = require("body-parser"),
    flash         = require("connect-flash"),
    session       = require('express-session');
//Configurations-------------------------------------------->
// console.log(process.env.MDATABASEURL);
mongoose.connect(process.env.MDATABASEURL);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/css"));
app.use(flash());
app.set("view engine", "ejs");

app.use(session({
    cookieName: 'session',
    secret: "Secret Louis",
    resave: false,
    saveUninitialized: false,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    secure : true
}));

app.use(function(request, response, next){
    //Inside ejs templates
    response.locals.error = request.flash("error");
    next();
});

//Middleware------------------------------------------------>

//Routes---------------------------------------------------->
var main_Route  = require("./routes/index");

app.use(main_Route);
    
var cases_Route       = require("./routes/parts/case"),
    coolers_Route      = require("./routes/parts/cooler"),
    cpus_Route         = require("./routes/parts/cpu"),
    gpus_Route         = require("./routes/parts/gpu"),
    hdds_Route         = require("./routes/parts/hdd"),
    memory_Route      = require("./routes/parts/memory"),
    motherboards_Route = require("./routes/parts/motherboard"),
    psus_Route         = require("./routes/parts/psu"),
    water_Route       = require("./routes/parts/water");
    
app.use(cases_Route);    
app.use(coolers_Route);    
app.use(cpus_Route);    
app.use(gpus_Route);    
app.use(hdds_Route);    
app.use(memory_Route);    
app.use(motherboards_Route);    
app.use(psus_Route);    
app.use(water_Route);    

var icons_Route           = require("./routes/dev/icons"),
    notifications_Route   = require("./routes/dev/notifications"),
    table_Route           = require("./routes/dev/table"),
    typography_Route      = require("./routes/dev/typography"),
    user_Route            = require("./routes/dev/user");

app.use(icons_Route);
app.use(notifications_Route);
app.use(table_Route);
app.use(typography_Route);
app.use(user_Route);

// var http = require("http");
// setInterval(function() {
//     http.get("http://memorybrain.herokuapp.com");
//     //console.log("pinged");
// }, 60000); 

app.get("*", function(request, response){
    response.send("Bad Request!"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});

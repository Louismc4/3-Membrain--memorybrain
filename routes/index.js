var express       = require("express"),
    router        = express.Router(),
    getBuildCase  = require('.././models/GetBuildCase'),
    computerScheme= require('.././models/ComputerScheme');
    
router.get("/", function(request, response){
    response.render("../views/index", {message : request.flash("error")});
});

router.post("/index", function(request, response){
    var buildName = request.body.selected;
    var gaming = false;
    if(buildName.includes("Gaming")){
        gaming = true;
    }
    var build = getBuildCase(buildName);
    var budget = request.body.BUDGET.value;
    // var core_Reqs = build.cores;
    // var thread_Reqs = build.threads;
    // var cpuclock_Reqs = build.clock;
    // var ram_Reqs = build.ram;
    // var gpucoreclock_Reqs = build.gpu_core_clock;
    // var gpucores_Reqs = build.gpu_cores;
    // var gpuram_Reqs = build.gpu_memory;
    // sort( { cost : 1 })
    // console.log(budget);
    computerScheme.find({cost: {$lt : budget}, cost : {$gt : budget - 15}}).sort( { cost : 1 }).limit(150).exec(function (err, allBuilds) {
        if(err){
            console.log(err);
            request.flash("error", "Error Getting Builds!");
            response.render("/");
        } else {
            response.render("../views/final", {allBuilds : allBuilds});
        }
    });
});

// router.post("/custom", function(request, response){
//     var buildName = "Custom";
//     var gaming = false;
//     // var generalCase = false;
//     if(request.body.customYORN == "YES"){
//          gaming = true;
//     }
//     var budget = request.body.BUDGET.number;
//     var core_Reqs = request.body.CPUCORES.number;
//     var thread_Reqs = request.body.CPUTHREADS.number;
//     var cpuclock_Reqs = request.body.CPUCORECLOCK.number;
//     var ram_Reqs = request.body.RAM.number;
//     var gpucoreclock_Reqs = request.body.GPUCLOCK.number;
//     var gpucores_Reqs = request.body.GPUCores.number;
//     var gpuram_Reqs = request.body.GPURAM.number;
//     computerScheme.find({}, function (err, allBuilds) {
//         var allbuilds;
//         if(err){
//             console.log(err);
//             request.flash("error", "Error Getting Builds!");
//             response.render("/");
//         } else {
//             response.render("final");
//             allbuilds = allbuilds;
//             gen_Build(buildName, budget, core_Reqs, thread_Reqs, cpuclock_Reqs, ram_Reqs, gpucoreclock_Reqs, gpucores_Reqs, gpuram_Reqs, allBuilds, response);
//         }
//     });
// });

// function gen_Build(buildName, budget, core_Reqs, thread_Reqs, cpuclock_Reqs, ram_Reqs, gpucoreclock_Reqs, gpucores_Reqs, gpuram_Reqs, allBuilds, response){
//     var completeBuilds = [];
//     allBuilds.forEach(function(build){
//         if (build.cpu.cooler == false){
//             console.log(build.cooler.title);
//         } 
//         if(build.cpu.cores >= core_Reqs && build.cpu.threads >= thread_Reqs && build.cpu.coreclock >= cpuclock_Reqs && build.memory.capacity >= ram_Reqs && build.gpu.clock >= gpucoreclock_Reqs 
//             && build.gpu.cores >= gpucores_Reqs && build.gpu.memory >= gpuram_Reqs){
//             completeBuilds.push(build); 
//         }
//     });
//     response.render("final", {name : buildName, budget : budget, core_Reqs: core_Reqs, thread_Reqs : thread_Reqs, cpuclock_Reqs : cpuclock_Reqs, ram_Reqs : ram_Reqs,
//         gpucoreclock_Reqs : gpucoreclock_Reqs, gpucores_Reqs : gpucores_Reqs, gpuram_Reqs : gpuram_Reqs, completeBuilds : completeBuilds});
// }
    
module.exports = router;
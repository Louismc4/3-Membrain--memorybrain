var requirements  = require("./Requirements");

function getBuildCase(buildName){
    var build;
    switch(buildName){
        case "Gaming : Battlefield 1":
            build = requirements.battlefield1;
            break;
        case "Gaming : GTA V":
            build = requirements.gtav;
            break;
        case "Gaming : World of Warcraft : Legion":
           build = requirements.worldofwarcraft;
            break;
        case "Gaming : Dark Souls 3":
            build = requirements.darksouls3;
            break;
        case "Gaming : Rocket League":
            build = requirements.rocketleague;
            break;  
        case "Gaming : Minecraft":
            build = requirements.minecraft;
           break;      
        case "3D Rendering and CAD":
            build = requirements.rendering;
            break;    
        case "Video and Photo Editing":
            build = requirements.video_photo_editing;
            break;    
        case "General Case":
            build = requirements.generalCase;
            break;  
        default:
            build = requirements.generalCase;
            break;
    }
    return build;
}

module.exports = getBuildCase;
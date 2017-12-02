var battlefield1 = {
    cores : 4,
    threads : 8,
    clock : 3.6,
    ram : 16,
    gpu_core_clock : 1152,
    gpu_cores : 1506,
    gpu_memory : 3
};

var gtav = { 
    cores : 4,
    threads : 8,
    clock : 3.2,
    ram : 8,
    gpu_core_clock : 980,
    gpu_cores : 960,
    gpu_memory : 2
};

var minecraft = {
    cores : 2,
    threads : 2,
    clock : 2.8,
    ram : 4,
    gpu_core_clock : 589,
    gpu_cores : 16,
    gpu_memory : 0.5
};

var worldofwarcraft = {
    cores : 4,
    threads : 4,
    clock : 3.0,
    ram : 4,
    gpu_core_clock : 1020,
    gpu_cores : 640,
    gpu_memory : 2
};

var rocketleague = {
    cores : 2,
    threads : 2,
    clock : 2.0,
    ram : 4,
    gpu_core_clock : 980,
    gpu_cores : 960,
    gpu_memory : 0.5
};

var darksouls3 = {
    cores : 2,
    threads : 4,
    clock : 3.1,
    ram : 4,
    gpu_core_clock : 1020,
    gpu_cores : 512,
    gpu_memory : 2
};

var rendering = {
    cores : 6,
    threads : 12,
    clock : 3.6,
    ram : 16,
    gpu_core_clock : 1200,
    gpu_cores : 1600,
    gpu_memory : 8
};

var video_photo_editing = {
    cores : 4,
    threads : 8,
    clock : 2.0,
    ram : 8,
    gpu_core_clock : 600,
    gpu_cores : 520,
    gpu_memory : 2
};

var generalCase = {
    cores : 2,
    threads : 2,
    clock : 1.6,
    ram : 8,
    gpu_core_clock : 200,
    gpu_cores : 1,
    gpu_memory : 0.5
};

module.exports = {
    battlefield1 : battlefield1,
    gtav : gtav,
    minecraft : minecraft,
    worldofwarcraft : worldofwarcraft,
    rocketleague : rocketleague,
    darksouls3 : darksouls3,
    rendering : rendering,
    video_photo_editing : video_photo_editing,
    generalCase : generalCase
};
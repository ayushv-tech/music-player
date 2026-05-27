let audio = document.getElementById("audio");

let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

playBtn.addEventListener("click", function(){
    audio.play();
});

pauseBtn.addEventListener("click", function(){
    audio.pause();
});
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let volumeIcon = document.getElementById("volume-icon");

nextBtn.addEventListener("click", function(){
    alert("Next Song");
});

prevBtn.addEventListener("click", function(){
    alert("Previous Song");
});
audio.addEventListener("timeupdate", function(){

    progress.max = audio.duration;

    progress.value = audio.currentTime;

});
volume.addEventListener("input",function(){
    audio.volume = volume.value;

});
volume.addEventListener("input", function(){

    audio.volume = volume.value;

    if(volume.value == 0){
        volumeIcon.className = "fa-solid fa-volume-xmark";
    }

    else if(volume.value < 0.5){
        volumeIcon.className = "fa-solid fa-volume-low";
    }

    else{
        volumeIcon.className = "fa-solid fa-volume-high";
    }

});
let audio = document.getElementById("audio");

let playPauseBtn = document.getElementById("playPause");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");
audio.volume = 0.5;
volume.value = 0.5;

volume.addEventListener("input",function() {
    audio.volume = volume.value;
});

playPauseBtn.addEventListener("click", function(){

    if(audio.paused){
        audio.play();
        playPauseBtn.innerHTML =  '<i class="fa-solid fa-play"></i>';
    }
    else{
        audio.pause();
        playPauseBtn.innerHTML =  '<i class="fa-solid fa-pause"></i>';
    }

});

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let volumeIcon = document.getElementById("volume-icon");

volumeIcon.addEventListener("click", function() {
    if(audio.volume > 0){
        audio.volume = 0;
        volume.value = 0;
        volumeIcon.className = "fa-solid fa-volume-xmark";
    } else {
        audio.volume = 0.5;
        volume.value = 0.5;
        volumeIcon.className = "fa-solid fa-volume-high";
    }
});


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

let time = document.getElementById("time");

audio.addEventListener("loadedmetadata", function () {
    let durationMin = Math.floor(audio.duration / 60);
    let durationSec = Math.floor(audio.duration % 60);

    if (durationSec < 10) durationSec = "0" + durationSec;

    time.innerText = `00:00 / ${durationMin}:${durationSec}`;
});

audio.addEventListener("timeupdate", function () {
    let currentMin = Math.floor(audio.currentTime / 60);
    let currentSec = Math.floor(audio.currentTime % 60);

    if (currentSec < 10) currentSec = "0" + currentSec;

    let durationMin = Math.floor(audio.duration / 60);
    let durationSec = Math.floor(audio.duration % 60);

    if (durationSec < 10) durationSec = "0" + durationSec;

    time.innerText =
        `${currentMin}:${currentSec} / ${durationMin}:${durationSec}`;
});

if(audio.paused){
    audio.play();
    playPauseBtn.innerHTML =  '<i class="fa-solid fa-play"></i>';
}
else{
    audio.pause();
    playPauseBtn.innerHTML =  '<i class="fa-solid fa-pause"></i>';
}

if(audio.paused){
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
else{
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}
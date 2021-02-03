/*--------------------Input Field, Slider, Icon------------------*/
let volumeNum = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");
let volumeIcon = document.getElementById("volume-image");
let hornSound = document.getElementById("horn-sound");

slider.addEventListener("input", function changeVolumeNum(){
    volumeNum.value = slider.value;
    changeVolumeIcon();
    changeVolume();
    disableSound();
});
volumeNum.addEventListener("input", function changeSlider(){
    slider.value = volumeNum.value;
    changeVolumeIcon();
    changeVolume();
    disableSound();
});

 function changeVolumeIcon(){
    if(volumeNum.value >= 67){
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(volumeNum.value >= 34){
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(volumeNum.value >= 1){
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
}

function changeVolume(){
    hornSound.volume = volumeNum.value / 100;
}

/*-------------------Horn Type-----------------------*/
let airHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");
let audioSelection = document.getElementById("audio-selection");
let soundImage = document.getElementById("sound-image");

function changeHornType(){
    if(airHorn.checked == true){
        soundImage.src = "./assets/media/images/air-horn.svg"; 
        hornSound.src = "./assets/media/audio/air-horn.mp3";
    }
    else if(carHorn.checked == true){
        soundImage.src = "./assets/media/images/car.svg"; 
        hornSound.src = "./assets/media/audio/car-horn.mp3";
    }
    else{
        soundImage.src = "./assets/media/images/party-horn.svg"; 
        hornSound.src = "./assets/media/audio/party-horn.mp3";
    }
}

audioSelection.addEventListener('change', changeHornType);
/*-------------------Button------------------------*/
let button = document.getElementById("honk-btn");

function disableSound(){
    if(volumeNum.value == 0){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
}

button.addEventListener("click", function playSound(event){
    event.preventDefault();
    hornSound.play();
});
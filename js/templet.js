var audioElement = new Audio("../mp3/maître-des-lieux.mp3");

function playAudio() {
  audioElement.play();
}

function pauseAudio() {
  audioElement.pause();
}

audioElement.addEventListener("pause", function() {
  click = 0;
});

var click = 0;

$('.lieu').click(() => {
    click++;

    if(click == 5){
        playAudio()
        click = 0;
    }
});






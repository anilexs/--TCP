var audioElement = new Audio("../mp3/maître-des-lieux.mp3");

// Ajouter l'élément audio au document
document.body.appendChild(audioElement);

// Lire l'audio
function playAudio() {
  audioElement.play();
}


function pauseAudio() {
  audioElement.pause();
}

// audioElement.addEventListener("play", function() {
//   console.log("L'audio a commencé à être lu.");
// });

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

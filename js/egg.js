var sequence = [];
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; // Flèches haut, haut, bas, bas, gauche, droite, B, A, Entrée

document.addEventListener('keydown', function(event) {
  sequence.push(event.keyCode);

  // Vérifiez si la séquence correspond à l'easter egg
  if (sequence.toString().indexOf(konamiCode) >= 0) {
    // Effectuez l'action de l'easter egg ici (par exemple, affichez un message)
    // alert('Easter egg activé !');
    console.log("GG");
    window.location.href = "./egg/sneek.html";

  }

  // Réinitialisez la séquence si trop de temps s'est écoulé entre les pressions de touches
  setTimeout(function() {
    sequence = [];
  }, 10000); // Temps d'attente en millisecondes (2 secondes)
});

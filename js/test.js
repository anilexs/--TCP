// Définir la date et l'heure de fin (année, mois - 1, jour, heure, minute, seconde)
var endDate2 = new Date(2023, 5, 29, 15, 0, -20);

// a commanter a utiliser pour les test pour changer la date
// localStorage.setItem("endDate2", endDate2);

// Vérifier si une date de fin est déjà stockée localement
var storedendDate2 = localStorage.getItem("endDate2");
if (storedendDate2) {
  endDate2 = new Date(storedendDate2);
} else {
  // Stocker la date de fin localement si elle n'est pas déjà présente
  localStorage.setItem("endDate2", endDate2);
}

// Définir l'action à effectuer à la fin du compte à rebours
function performAction() {
  // Afficher un message de fin en cour
  document.getElementById("countdown2").innerHTML = "en cour";
  
  // Planifier l'affichage du message "Terminé" 8 heures après
  setTimeout(function() {
    document.getElementById("countdown2").innerHTML = "Terminé";
  }, 8 * 60 * 60 * 1000); // 8 heures en millisecondes
}

// Fonction pour mettre à jour le compte à rebours
function updatecountdown2() {
  var currentTime = new Date().getTime();
  var timeRemaining = endDate2 - currentTime;

  if (timeRemaining <= 0) {
    // Le compte à rebours est terminé
    performAction();
  } else {
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var countdown2String = "";
    
    if (days > 0) {
      countdown2String += days + "j ";
    }
    if (hours > 0) {
      countdown2String += hours + "h ";
    }
    if (minutes > 0) {
      countdown2String += minutes + "m ";
    }
    
    countdown2String += seconds + "s";

    document.getElementById("timer2").innerHTML = countdown2String;

    setTimeout(updatecountdown2, 1000); // Appeler la fonction updatecountdown2() chaque seconde
  }
}

// Démarrer le compte à rebours lorsque la page se charge
window.onload = function() {
  updatecountdown2();
};







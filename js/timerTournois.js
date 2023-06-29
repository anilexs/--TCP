// Définir la date et l'heure de fin (année, mois - 1, jour, heure, minute, seconde)
var endDate = new Date(2023, 5, 29, 14, 10, 0);

// a commanter a utiliser pour les test pour changer la date
localStorage.setItem("endDate", endDate);

// Vérifier si une date de fin est déjà stockée localement
var storedEndDate = localStorage.getItem("endDate");
if (storedEndDate) {
  endDate = new Date(storedEndDate);
} else {
  // Stocker la date de fin localement si elle n'est pas déjà présente
  localStorage.setItem("endDate", endDate);
}

// Définir l'action à effectuer à la fin du compte à rebours
function performAction() {
  // Afficher un message de fin en cour
  document.getElementById("countdown").innerHTML = "en cour";
  
  // Planifier l'affichage du message "Terminé" 8 heures après
  setTimeout(function() {
    document.getElementById("countdown").innerHTML = "Terminé";
  }, 8 * 60 * 60 * 1000); // 8 heures en millisecondes
}

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  var currentTime = new Date().getTime();
  var timeRemaining = endDate - currentTime;

  if (timeRemaining <= 0) {
    // Le compte à rebours est terminé
    performAction();
  } else {
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var countdownString = "";
    
    if (days > 0) {
      countdownString += days + "j ";
    }
    if (hours > 0) {
      countdownString += hours + "h ";
    }
    if (minutes > 0) {
      countdownString += minutes + "m ";
    }
    
    countdownString += seconds + "s";

    document.getElementById("timer").innerHTML = countdownString;

    setTimeout(updateCountdown, 1000); // Appeler la fonction updateCountdown() chaque seconde
  }
}

// Démarrer le compte à rebours lorsque la page se charge
window.onload = function() {
  updateCountdown();
};
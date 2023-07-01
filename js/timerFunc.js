// // Définir la date et l'heure de fin (année, mois - 1, jour, heure, minute, seconde)
// var endDate2 = new Date(2023, 6, 1, 22, 16, 0);
// var endDate3 = new Date(2023, 6, 1, 22, 16, 30);
// localStorage.setItem("endDate2", endDate2);
// localStorage.setItem("endDate3", endDate3);

// // Vérifier si une date de fin est déjà stockée localement pour endDate2
// var storedEndDate2 = localStorage.getItem("endDate2");
// if (storedEndDate2) {
//   endDate2 = new Date(storedEndDate2);
// } else {
//   // Stocker la date de fin localement si elle n'est pas déjà présente pour endDate2
//   localStorage.setItem("endDate2", endDate2);
// }

// // Vérifier si une date de fin est déjà stockée localement pour endDate3
// var storedEndDate3 = localStorage.getItem("endDate3");
// if (storedEndDate3) {
//   endDate3 = new Date(storedEndDate3);
// } else {
//   // Stocker la date de fin localement si elle n'est pas déjà présente pour endDate3
//   localStorage.setItem("endDate3", endDate3);
// }

// // Définir l'action à effectuer à la fin du compte à rebours
// function performAction() {
//   var currentTime = new Date().getTime();
  
//   if (currentTime < endDate3) {
//     // Afficher le message "En cours"
//     document.getElementById("countdown2").innerHTML = "En cours";
    
//     // Planifier l'affichage du message "Terminé" pour endDate3
//     setTimeout(function() {
//       document.getElementById("countdown2").innerHTML = "Terminé";
//     }, endDate3 - currentTime);
//   } else {
//     // Afficher le message "Terminé"
//     document.getElementById("countdown2").innerHTML = "Terminé";
//   }
// }

// // Fonction pour mettre à jour le compte à rebours
// function updateCountdown2() {
//   var currentTime = new Date().getTime();
//   var timeRemaining = endDate2 - currentTime;

//   if (timeRemaining <= 0) {
//     // Le compte à rebours endDate2 est terminé
//     performAction();
//   } else {
//     var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//     var countdown2String = "";

//     if (days > 0) {
//       countdown2String += days + "j ";
//     }
//     if (hours > 0) {
//       countdown2String += hours + "h ";
//     }
//     if (minutes > 0) {
//       countdown2String += minutes + "m ";
//     }

//     countdown2String += seconds + "s";

//     document.getElementById("timer2").innerHTML = countdown2String;

//     setTimeout(updateCountdown2, 1000); // Appeler la fonction updateCountdown2() chaque seconde
//   }
// }

// // Démarrer le compte à rebours lorsque la page se charge
// window.onload = function() {
//   updateCountdown2();
// };

function performAction(elementId, endDate, nextEndDate, nextElementId) {
  var currentTime = new Date().getTime();
  
  if (currentTime < endDate) {
    // Afficher le message "En cours" pour l'élément actuel
    document.getElementById(elementId).innerHTML = "En cours";
    
    // Planifier l'affichage du message "Terminé" pour l'élément actuel
    setTimeout(function() {
      document.getElementById(elementId).innerHTML = "Terminé";
      
      // Planifier l'affichage du message "En cours" pour l'élément suivant
      setTimeout(function() {
        document.getElementById(nextElementId).innerHTML = "En cours";
        
        // Planifier l'affichage du message "Terminé" pour l'élément suivant
        setTimeout(function() {
          document.getElementById(nextElementId).innerHTML = "Terminé";
        }, nextEndDate - endDate);
      }, nextEndDate - currentTime);
    }, endDate - currentTime);
  } else {
    // Afficher le message "Terminé" pour l'élément actuel
    document.getElementById(elementId).innerHTML = "Terminé";
    
    // Planifier l'affichage du message "En cours" pour l'élément suivant
    setTimeout(function() {
      document.getElementById(nextElementId).innerHTML = "En cours";
      
      // Planifier l'affichage du message "Terminé" pour l'élément suivant
      setTimeout(function() {
        document.getElementById(nextElementId).innerHTML = "Terminé";
      }, nextEndDate - endDate);
    }, nextEndDate - currentTime);
  }
}

function startCustomCountdown(endDate, nextEndDate, elementId, timerId) {
  function updateCountdown() {
    var currentTime = new Date().getTime();
    var timeRemaining = endDate - currentTime;

    if (timeRemaining <= 0) {
      // Le compte à rebours est terminé, appeler performAction avec les paramètres appropriés
      performAction(elementId, endDate, nextEndDate, timerId);
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

      document.getElementById(timerId).innerHTML = countdownString;

      setTimeout(updateCountdown, 1000); // Appeler la fonction updateCountdown chaque seconde
    }
  }

  // Démarrer le compte à rebours lorsque la page se charge
  updateCountdown();
}


// // Utilisation de la fonction startCustomCountdown avec des valeurs personnalisées
// var customEndDate2 = new Date(2023, 6, 1, 22, 40, 0);
// var customEndDate3 = new Date(2023, 6, 1, 22, 45, 20);
// startCustomCountdown(customEndDate2, customEndDate3, "countdown2", "timer2");

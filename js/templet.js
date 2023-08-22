var audioElement = new Audio("/mp3/maître-des-lieux.mp3");

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





function handleWindowResize() {
  var windowWidth = $(window).width();
  
  if (windowWidth >= 600) {
      $(".Menu").insertBefore(".burgerMenu");
      $(".serveur").insertBefore(".burgerMenu");
      $(".Menu").removeClass("menuSize");
      $(".serveur").removeClass("menuSize");
      $(".burger").css("top", "60px");
      $(".navAbso").css("justify-content", "space-around");
  } 
  if (windowWidth < 600) {
      $(".Menu").appendTo(".burger");
      $(".serveur").appendTo(".burger");
      $(".Menu").addClass("menuSize");
      $(".serveur").addClass("menuSize");
      $(".burger").css("top", "53px");
      $(".navAbso").css("justify-content", "flex-end");
  }
  
  if (windowWidth >= 900) {
      $(".annonces").insertBefore(".burgerMenu");
      $(".annonces").removeClass("menuSize");
  } 
  if (windowWidth < 900) {
      $(".annonces").appendTo(".burger");
      $(".annonces").addClass("menuSize");
  }

  if (windowWidth >= 1000) {
      $(".cup").insertBefore(".burgerMenu");
      $(".cup").removeClass("menuSize");
  } 
  if (windowWidth < 1000) {
      $(".cup").appendTo(".burger");
      $(".cup").addClass("menuSize");
  }

  if (windowWidth >= 1100) {
      $(".new").insertBefore(".burgerMenu");
      $(".new").removeClass("menuSize");
  } 
  if (windowWidth < 1100) {
      $(".new").appendTo(".burger");
      $(".new").addClass("menuSize");
  }

  if (windowWidth >= 1200) {
      $(".arcade").insertBefore(".burgerMenu");
      $(".arcade").removeClass("menuSize");
  } 
  if (windowWidth < 1200) {
      $(".arcade").appendTo(".burger");
      $(".arcade").addClass("menuSize");
  } 

  if (windowWidth >= 1350) {
      $(".don").insertBefore(".burgerMenu");
      $(".don").removeClass("menuSize");
  } 
  if (windowWidth < 1350) {
      $(".don").appendTo(".burger");
      $(".don").addClass("menuSize");
  } 
  
  if (windowWidth >= 1440) {
      $(".shop").insertBefore(".burgerMenu");
      $(".burgerMenu").css("display", "none");
      $(".shop").removeClass("menuSize");
  }  
  if (windowWidth < 1440) {
      $(".shop").appendTo(".burger");
      $(".burgerMenu").css("display", "block");
      $(".shop").addClass("menuSize");
  } 
}

handleWindowResize();

$(window).resize(function() {
  handleWindowResize();
});



var menuVisible = false;
$(".burgerMenu").click(function() {
  $(".burger").stop();
  
  if (menuVisible) {
      $(".burger").animate(
          {
              right: "-250px"
          },
          300,
          "linear"
      );
  } else {
      $(".burger").animate(
          {
              right: "0"
          },
          300,
          "linear"
      );
  }
  
  menuVisible = !menuVisible;
});


// temps de chargement de la page en millisecond
    // $(document).ready(function() {
    //     var startTime = performance.now();

    //     $(window).on("load", function() {
    //         var endTime = performance.now();
    //         var loadTime = (endTime - startTime) / 1000; // Convertir en secondes
    //         console.log("Le temps de chargement de la page est de " + loadTime.toFixed(5) + " secondes.");
    //     });
    // });
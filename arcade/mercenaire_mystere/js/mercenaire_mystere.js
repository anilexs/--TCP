let tabAssoc = {
    "mercener" : {
        "anvil" : ["anvilDiv", "anvil.jpg"],
        "cannon" : ["cannonDiv", "cannon.png"],
        "chaac" : ["chaacDiv", "chaac.jpg"],
        "dahlia" : ["dahliaDiv", "dahlia.jpg"],
        "dallas" : ["dallasDiv", "dallas.jpg"],
        "dima" : ["dimaDiv", "dima.jpg"],
        "fixer" : ["fixerDiv", "fixer.jpg"],
        "gl1tch" : ["gl1tchDiv", "gl1tch.jpg"],
        "glimpse" : ["glimpseDiv", "glimpse.jpg"],
        "juke" : ["jukeDiv", "juke.jpg"],
        "kestrel" : ["kestrelDiv", "kestrel.jpg"],
        "lancer" : ["lancerDiv", "lancer.jpg"],
        "mack" : ["mackDiv", "mack.jpg"],
        "phantom" : ["phantomDiv", "phantom.jpg"],
        "ronin" : ["roninDiv", "ronin.jpg"],
        "runway" : ["runwayDiv", "runway.jpg"],
        "saint" : ["saintDiv", "saint.jpg"],
        "scorch" : ["scorchDiv", "scorch.jpg"],
        "seeker" : ["seekerDiv", "seeker.jpg"],
        "sigrid" : ["sigridDiv", "sigrid.jpg"],
        "switchblade" : ["switchbladeDiv", "switchblade.jpg"],
        "talon" : ["talonDiv", "talon.jpg"],
        "trench" : ["trenchDiv", "trench.jpg"],
        "umbra" : ["umbraDiv", "umbra.jpg"],
        "vivi" : ["viviDiv", "vivi.jpg"],
        "vy" : ["vyDiv", "vy.jpg"],
    },
    "soutien": {
    "dahlia": ["dahliaDiv", "dahlia.jpg"],
    "saint": ["saintDiv", "saint.jpg"],
    "runway": ["runwayDiv", "runway.jpg"],
    "vivi": ["viviDiv", "vivi.jpg"],
},

    "défenseur" : {
        "anvil" : ["anvilDiv", "anvil.jpg"],
        "fixer" : ["fixerDiv", "fixer.jpg"],
        "juke" : ["jukeDiv", "juke.jpg"],
        "mack" : ["mackDiv", "mack.jpg"],
        "trench" : ["trenchDiv", "trench.jpg"],
        "vy" : ["vyDiv", "vy.jpg"],
    },
    "premiére_ligne" : {
        "cannon" : ["cannonDiv", "cannon.png"], 
        "dima" : ["dimaDiv", "dima.jpg"],
        "gl1tch" : ["gl1tchDiv", "gl1tch.jpg"], 
        "sigrid" : ["sigridDiv", "sigrid.jpg"], 
        "switchblade" : ["switchbladeDiv", "switchblade.jpg"], 
    },
    "duellist" : {
        "chaac" : ["chaacDiv", "chaac.jpg"],
        "kestrel" : ["kestrelDiv", "kestrel.jpg"],
        "lancer" : ["lancerDiv", "lancer.jpg"],
        "ronin" : ["roninDiv", "ronin.jpg"],
        "scorch" : ["scorchDiv", "scorch.jpg"],
        "umbra" : ["umbraDiv", "umbra.jpg"],
    },
    
    "renseignement" : {
        "dallas" : ["dallasDiv", "dallas.jpg"],
        "glimpse" : ["glimpseDiv", "glimpse.jpg"],
        "phantom" : ["phantomDiv", "phantom.jpg"],
        "seeker" : ["seekerDiv", "seeker.jpg"],
        "talon" : ["talonDiv", "talon.jpg"],
    },
}
let valeur;
$("#all").change(function() {
    const mercener = tabAssoc["mercener"]
    if ($("#all").is(":checked")) {
      Object.keys(mercener).forEach(function(cle) {
        valeur = mercener[cle];
        if (!$("#" + valeur[0]).length) {

            $("#" + cle).prop("checked", true);
            $("#soutien").prop("checked", true);
            $("#défenseur").prop("checked", true);
            $("#premiére_ligne").prop("checked", true);
            $("#duellist").prop("checked", true);
            $("#renseignement").prop("checked", true);
            var div = $('<div id="' + valeur[0] + '" class="img"></div>');
            $('#select').append(div);
            $('#' + valeur[0]).css('background-image', 'url(img/' + valeur[1] + ')');
        }
    })
} else {
    Object.keys(mercener).forEach(function(cle) {
        valeur = mercener[cle];        
        $("#" + cle).prop("checked", false);
        $("#soutien").prop("checked", false);
        $("#défenseur").prop("checked", false);
        $("#premiére_ligne").prop("checked", false);
        $("#duellist").prop("checked", false);
            $("#renseignement").prop("checked", false);
        $("#" + valeur[0]).remove();
      });
    }
  });

  $("#soutien").change(function() {
    const soutien = tabAssoc["soutien"]
    if ($("#soutien").is(":checked")) {
      Object.keys(soutien).forEach(function(cle) {
        valeur = soutien[cle];
        if (!$("#" + valeur[0]).length) {

            $("#" + cle).prop("checked", true);
            var div = $('<div id="' + valeur[0] + '" class="img"></div>');
            $('#select').append(div);
            $('#' + valeur[0]).css('background-image', 'url(img/' + valeur[1] + ')');
        }
    })
} else {
    Object.keys(soutien).forEach(function(cle) {
        valeur = soutien[cle];        
        $("#" + cle).prop("checked", false);
        $("#" + valeur[0]).remove();
      });
    }
  });
  
  $("#défenseur").change(function() {
    const défenseur = tabAssoc["défenseur"]
    if ($("#défenseur").is(":checked")) {
      Object.keys(défenseur).forEach(function(cle) {
        valeur = défenseur[cle];
        if (!$("#" + valeur[0]).length) {

            $("#" + cle).prop("checked", true);
            var div = $('<div id="' + valeur[0] + '" class="img"></div>');
            $('#select').append(div);
            $('#' + valeur[0]).css('background-image', 'url(img/' + valeur[1] + ')');
        }
    })
} else {
    Object.keys(défenseur).forEach(function(cle) {
        valeur = défenseur[cle];        
        $("#" + cle).prop("checked", false);
        $("#" + valeur[0]).remove();
      });
    }
  });
  
  $("#premiére_ligne").change(function() {
    const premiére_ligne = tabAssoc["premiére_ligne"]
    if ($("#premiére_ligne").is(":checked")) {
      Object.keys(premiére_ligne).forEach(function(cle) {
        valeur = premiére_ligne[cle];
        if (!$("#" + valeur[0]).length) {

            $("#" + cle).prop("checked", true);
            var div = $('<div id="' + valeur[0] + '" class="img"></div>');
            $('#select').append(div);
            $('#' + valeur[0]).css('background-image', 'url(img/' + valeur[1] + ')');
        }
    })
} else {
    Object.keys(premiére_ligne).forEach(function(cle) {
        valeur = premiére_ligne[cle];        
        $("#" + cle).prop("checked", false);
        $("#" + valeur[0]).remove();
      });
    }
  });
  
  $("#duellist").change(function() {
    const duellist = tabAssoc["duellist"]
    if ($("#duellist").is(":checked")) {
      Object.keys(duellist).forEach(function(cle) {
        valeur = duellist[cle];
        if (!$("#" + valeur[0]).length) {

            $("#" + cle).prop("checked", true);
            var div = $('<div id="' + valeur[0] + '" class="img"></div>');
            $('#select').append(div);
            $('#' + valeur[0]).css('background-image', 'url(img/' + valeur[1] + ')');
        }
    })
} else {
    Object.keys(duellist).forEach(function(cle) {
        valeur = duellist[cle];        
        $("#" + cle).prop("checked", false);
        $("#" + valeur[0]).remove();
      });
    }
  });

  $("#renseignement").change(function() {
    const renseignement = tabAssoc["renseignement"]
    if ($("#renseignement").is(":checked")) {
      Object.keys(renseignement).forEach(function(cle) {
        valeur = renseignement[cle];
        if (!$("#" + valeur[0]).length) {

            $("#" + cle).prop("checked", true);
            var div = $('<div id="' + valeur[0] + '" class="img"></div>');
            $('#select').append(div);
            $('#' + valeur[0]).css('background-image', 'url(img/' + valeur[1] + ')');
        }
    })
} else {
    Object.keys(renseignement).forEach(function(cle) {
        valeur = renseignement[cle];        
        $("#" + cle).prop("checked", false);
        $("#" + valeur[0]).remove();
      });
    }
  });

function rogue(id, divId, role, img) {
    $(id).change(function() {
        if ($(id).is(":checked")) {
            if (!$("#" + divId).length) {
                var div = $('<div id="' + divId + '" class="img"></div>');
                $('#select').append(div);
                $('#' + divId).css('background-image', 'url(img/' + img + ')');
            }
        } else {
            $("#" + divId).remove();
        }
        
    });
}

    var checkboxes = $("input[type='checkbox']");
var categories = Object.keys(tabAssoc);

checkboxes.on("change", function() {
    var categoryChecked = {};

    categories.forEach(function(category) {
        categoryChecked[category] = true;
    });

    checkboxes.each(function() {
        var checkboxId = $(this).attr('id');
        var isChecked = $(this).is(":checked");

        categories.forEach(function(category) {
            if (checkboxId in tabAssoc[category]) {
                if (!isChecked) {
                    categoryChecked[category] = false;
                }
            } else if ($(this).closest("." + category).length > 0 && !isChecked) {
                categoryChecked[category] = false;
            }
        });
    });

    checkboxes.each(function() {
        var checkboxId = $(this).attr('id');
        if (checkboxId in tabAssoc) {
            $(this).prop("checked", categoryChecked[checkboxId]);
        }
    });

    var allChecked = true;
    categories.forEach(function(category) {
        allChecked = allChecked && categoryChecked[category];
    });
    $("#all").prop("checked", allChecked);
    
    
    updateDistance();
});





rogue(anvil, "anvilDiv", "défenseur","anvil.jpg");
rogue(cannon, "cannonDiv", "premiére_ligne", "cannon.png");
rogue(chaac, "chaacDiv", "duellist", "chaac.jpg");
rogue(dahlia, "dahliaDiv", "soutien", "dahlia.jpg");
rogue(dallas, "dallasDiv", "renseignement", "dallas.jpg");
rogue(dima, "dimaDiv", "premiére_ligne", "dima.jpg");
rogue(fixer, "fixerDiv" , "défenseur","fixer.jpg");
rogue(gl1tch, "gl1tchDiv", "premiére_ligne", "gl1tch.jpg");
rogue(glimpse, "glimpseDiv", "renseignement", "glimpse.jpg");
rogue(juke, "jukeDiv", "défenseur", "juke.jpg");
rogue(kestrel, "kestrelDiv", "duellist", "kestrel.jpg");
rogue(lancer, "lancerDiv", "duellist", "lancer.jpg");
rogue(mack, "mackDiv", "défenseur", "mack.jpg");
rogue(phantom, "phantomDiv", "renseignement","phantom.jpg");
rogue(ronin, "roninDiv", "duellist", "ronin.jpg");
rogue(runway, "runwayDiv", "soutien ", "runway.jpg");
rogue(saint, "saintDiv" , "soutien", "saint.jpg");
rogue(scorch, "scorchDiv", "duellist", "scorch.jpg");
rogue(seeker, "seekerDiv", "renseignement", "seeker.jpg");
rogue(sigrid, "sigridDiv", "premiére_ligne", "sigrid.jpg");
rogue(switchblade, "switchbladeDiv", "premiére_ligne", "switchblade.jpg");
rogue(talon, "talonDiv", "renseignement", "talon.jpg");
rogue(trench, "trenchDiv", "défenseur", "trench.jpg");
rogue(umbra, "umbraDiv", "duellist", "umbra.jpg");
rogue(vivi, "viviDiv", "soutien", "vivi.jpg");
rogue(vy, "vyDiv", "défenseur", "vy.jpg");



const elementDepasse = $('#select');
const footer = $('.footer');

function updateDistance() {
  const rectElement = elementDepasse[0].getBoundingClientRect();
  const rectFooter = footer[0].getBoundingClientRect();
  
  const distanceEnPixels = rectFooter.top - rectElement.bottom;

  if (distanceEnPixels < 0) {
    console.log(`L'élément est en partie sous le footer de ${distanceEnPixels}px.`);

    // Ajoutez la valeur de distanceEnPixels pour déplacer le footer vers le bas
    const footerBottom = parseInt($('.footer').css('bottom'), 10); // Obtenir la valeur actuelle du bottom
    $('.footer').css('bottom', footerBottom - Math.abs(distanceEnPixels) + 'px'); // Soustraire la valeur absolue de distanceEnPixels
  } else {
    console.log(`L'élément n'est pas sous le footer.`);

    // Réinitialisez la position du footer
    $('.footer').css('bottom', '0px');
  }
}

$(window).on('load', updateDistance);
$(window).on('resize', updateDistance);


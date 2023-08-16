let tabAssoc = {
    "mercener" : {
        "anvil" : ["anvilDiv", "anvil.jpg"],
        "cannon" : ["cannonDiv", "cannon.jpg"],
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
        "cannon" : ["cannonDiv", "cannon.jpg"], 
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




rogue(anvil, "anvilDiv", "défenseur","anvil.jpg");
rogue(cannon, "cannonDiv", "premiére_ligne", "");
rogue(chaac, "chaacDiv", "duellist", "");
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
rogue(runway, "runwayDiv", "soutien ", "");
rogue(saint, "saintDiv" , "soutien", "");
rogue(scorch, "scorchDiv", "duellist", "");
rogue(seeker, "seekerDiv", "renseignement", "");
rogue(sigrid, "sigridDiv", "premiére_ligne", "");
rogue(switchblade, "switchbladeDiv", "premiére_ligne", "");
rogue(talon, "talonDiv", "renseignement", "");
rogue(trench, "trenchDiv", "défenseur", "");
rogue(umbra, "umbraDiv", "duellist", "");
rogue(vivi, "viviDiv", "soutien", "");
rogue(vy, "vyDiv", "défenseur", "");
// var checkId = [anvil, cannon, chaac, dahlia, dallas, dima, fixer, gl1tch, glimpse, juke, kestrel, lancer, mack, phantom, ronin, runway, saint, scorch, seeker, sigrid, switchblade, talon, trench, umbra, vivi, vy];
// let divId = ["anvilDiv", "cannonDiv", "chaacDiv", "dahliaDiv", "dallasDiv", "dimaDiv", "fixerDiv", "gl1tchDiv", "glimpseDiv", "jukeDiv", "kestrelDiv", "lancerDiv", "mackDiv", "phantomDiv", "roninDiv", "runwayDiv", "saintDiv", "scorchDiv", "seekerDiv", "sigridDiv", "switchbladeDiv", "talonDiv", "trenchDiv", "umbraDiv", "viviDiv", "vyDiv"];
// let soutien = [dahlia, saint];
// let soutienId = ["dahliaDiv", "saintDiv"];

// soutienId.forEach((element) => console.log(element));
// Object.keys(tabAssoc).forEach(function(cle) {
//   const valeur = tabAssoc[cle];
//   console.log(`Clé: ${cle}, Valeur: ${valeur}`);
// });

// $("#all").change(function() {
//     if ($("#all").is(":checked")) {

// Object.keys(tabAssoc).forEach(function(cle) {
//   const valeur = tabAssoc[cle];
//   if (!$("#" + valeur).length) {
//                 $(cle).prop("checked", true);
//                 var div = $('<div id="' + valeur + '" class="img"></div>');
//                 $('#select').append(div);
//                 console.log($("#" + valeur).length);
//             }
// }); 
// }
// });




let tabAssoc = {
    "mercener" : {
        "anvil" : ["anvilDiv", "anvil.jpg"],
        "cannon" : ["cannonDiv", ""],
        "chaac" : ["chaacDiv", ""],
        "dahlia" : ["dahliaDiv", "dahlia.jpg"],
        "dallas" : ["dallasDiv", "dallas.jpg"],
        "dima" : ["dimaDiv", "dima.jpg"],
        "fixer" : ["fixerDiv", "fixer.jpg"],
        "gl1tch" : ["gl1tchDiv", ""],
        "glimpse" : ["glimpseDiv", ""],
        "juke" : ["jukeDiv", ""],
        "kestrel" : ["kestrelDiv", ""],
        "lancer" : ["lancerDiv", ""],
        "mack" : ["mackDiv", ""],
        "phantom" : ["phantomDiv", "phantom.jpg"],
        "ronin" : ["roninDiv", ""],
        "runway" : ["runwayDiv", ""],
        "saint" : ["saintDiv", ""],
        "scorch" : ["scorchDiv", ""],
        "seeker" : ["seekerDiv", ""],
        "sigrid" : ["sigridDiv", ""],
        "switchblade" : ["switchbladeDiv", ""],
        "talon" : ["talonDiv", ""],
        "trench" : ["trenchDiv", ""],
        "umbra" : ["umbraDiv", ""],
        "vivi" : ["viviDiv", ""],
        "vy" : ["vyDiv", ""],
    },
    "soutien" : {
        "dahlia" : "dahliaDiv",
        "saint" : "saintDiv",
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
        $("#" + valeur[0]).remove();
      });
    }
  });

 $("#soutien").change(function() {
    const soutien = tabAssoc["soutien"]; // Accéder à la sous-structure "soutien"

    if ($("#soutien").is(":checked")) {
      Object.keys(soutien).forEach(function(cle) {
        const valeur = soutien[cle];
        if (!$("#" + valeur).length) {
          $("#" + cle).prop("checked", true);
          var div = $('<div id="' + valeur + '" class="img"></div>');
          $('#select').append(div);
        }
      });
    } else {
      Object.keys(soutien).forEach(function(cle) {
        const valeur = soutien[cle];
        $("#" + cle).prop("checked", false);
        $("#" + valeur).remove();
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

// rogue(défenseur);
// rogue(premiére_ligne);
// rogue(duellist);
// rogue(renseignement);

rogue(anvil, "anvilDiv", "","anvil.jpg");
rogue(cannon, "cannonDiv");
rogue(chaac, "chaacDiv");
rogue(dahlia, "dahliaDiv", "soutien", "dahlia.jpg");
rogue(dallas, "dallasDiv", "", "dallas.jpg");
rogue(dima, "dimaDiv", "", "dima.jpg");
rogue(fixer, "fixerDiv" , "","fixer.jpg");
rogue(gl1tch, "gl1tchDiv");
rogue(glimpse, "glimpseDiv");
rogue(juke, "jukeDiv");
rogue(kestrel, "kestrelDiv");
rogue(lancer, "lancerDiv");
rogue(mack, "mackDiv");
rogue(phantom, "phantomDiv", "","phantom.jpg");
rogue(ronin, "roninDiv");
rogue(runway, "runwayDiv");
rogue(saint, "saintDiv" , "soutien");
rogue(scorch, "scorchDiv");
rogue(seeker, "seekerDiv");
rogue(sigrid, "sigridDiv");
rogue(switchblade, "switchbladeDiv");
rogue(talon, "talonDiv");
rogue(trench, "trenchDiv");
rogue(umbra, "umbraDiv");
rogue(vivi, "viviDiv");
rogue(vy, "vyDiv");
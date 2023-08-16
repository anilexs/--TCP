// var checkId = [anvil, cannon, chaac, dahlia, dallas, dima, fixer, gl1tch, glimpse, juke, kestrel, lancer, mack, phantom, ronin, runway, saint, scorch, seeker, sigrid, switchblade, talon, trench, umbra, vivi, vy];
// let divId = ["anvilDiv", "cannonDiv", "chaacDiv", "dahliaDiv", "dallasDiv", "dimaDiv", "fixerDiv", "gl1tchDiv", "glimpseDiv", "jukeDiv", "kestrelDiv", "lancerDiv", "mackDiv", "phantomDiv", "roninDiv", "runwayDiv", "saintDiv", "scorchDiv", "seekerDiv", "sigridDiv", "switchbladeDiv", "talonDiv", "trenchDiv", "umbraDiv", "viviDiv", "vyDiv"];
// let soutien = [dahlia, saint];
// let soutienId = ["dahliaDiv", "saintDiv"];
let tabAssoc = {
    "anvil" : "anvilDiv",
    "cannon" : "cannonDiv",
    "chaac" : "chaacDiv",
    "dahlia" : "dahliaDiv",
    "dallas" : "dallasDiv",
    "dima" : "dimaDiv",
    "fixer" : "fixerDiv",
    "gl1tch" : "gl1tchDiv",
    "glimpse" : "glimpseDiv",
    "juke" : "jukeDiv",
    "kestrel" : "kestrelDiv",
    "lancer" : "lancerDiv",
    "mack" : "mackDiv",
    "phantom" : "phantomDiv",
    "ronin" : "roninDiv",
    "runway" : "runwayDiv",
    "saint" : "saintDiv",
    "scorch" : "scorchDiv",
    "seeker" : "seekerDiv",
    "sigrid" : "sigridDiv",
    "switchblade" : "switchbladeDiv",
    "talon" : "talonDiv",
    "trench" : "trenchDiv",
    "umbra" : "umbraDiv",
    "vivi" : "viviDiv",
    "vy" : "vyDiv",
    "soutien" : {
        "dahlia" : "dahliaDiv",
        "saint" : "saintDiv",
    }
}

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

$("#all").change(function() {
    if ($("#all").is(":checked")) {
      Object.keys(tabAssoc).forEach(function(cle) {
        const valeur = tabAssoc[cle];
        if (!$("#" + valeur).length) {
          $("#" + cle).prop("checked", true);
          var div = $('<div id="' + valeur + '" class="img"></div>');
          $('#select').append(div);
        }
      });
    } else {
      Object.keys(tabAssoc).forEach(function(cle) {
        const valeur = tabAssoc[cle];
        $("#" + cle).prop("checked", false);
        $("#" + valeur).remove();
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

rogue(anvil, "anvilDiv");
rogue(cannon, "cannonDiv");
rogue(chaac, "chaacDiv");
rogue(dahlia, "dahliaDiv", "soutien");
rogue(dallas, "dallasDiv");
rogue(dima, "dimaDiv");
rogue(fixer, "fixerDiv");
rogue(gl1tch, "gl1tchDiv");
rogue(glimpse, "glimpseDiv");
rogue(juke, "jukeDiv");
rogue(kestrel, "kestrelDiv");
rogue(lancer, "lancerDiv");
rogue(mack, "mackDiv");
rogue(phantom, "phantomDiv");
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
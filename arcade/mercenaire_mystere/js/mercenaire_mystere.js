var checkId = [anvil, cannon, chaac, dahlia, dallas, dima, fixer, gl1tch, glimpse, juke, kestrel, lancer, mack, phantom, ronin, runway, saint, scorch, seeker, sigrid, switchblade, talon, trench, umbra, vivi, vy]
var divId = ["anvilDiv", "cannonDiv", "chaacDiv", "dahliaDiv", "dallasDiv", "dimaDiv", "fixerDiv", "gl1tchDiv", "glimpseDiv", "jukeDiv", "kestrelDiv", "lancerDiv", "mackDiv", "phantomDiv", "roninDiv", "runwayDiv", "saintDiv", "scorchDiv", "seekerDiv", "sigridDiv", "switchbladeDiv", "talonDiv", "trenchDiv", "umbraDiv", "viviDiv", "vyDiv"]


$("#all").change(function() {
        if ($("#all").is(":checked")) {
            for (i = 0; i < checkId.length; i++){
                $(checkId[i]).prop("checked", true);
            }
        } else {
            for (i = 0; i < checkId.length; i++){
                $(checkId[i]).prop("checked", false);
                $("#" + divId[i]).remove();
            }
        }
    });



function rogue (id, divId, img){
    $(id).change(function() {
        if ($(id).is(":checked")) {
            var div = $('<div id="' + divId + '" class="img"></div>');
            $('#select').append(div);
        } else {
            $("#" + divId).remove();
        }
    });
}

// rogue(soutien);
// rogue(défenseur);
// rogue(premiére_ligne);
// rogue(duellist);
// rogue(renseignement);

rogue(anvil, "anvilDiv");
rogue(cannon, "cannonDiv");
rogue(chaac, "chaacDiv");
rogue(dahlia, "dahliaDiv");
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
rogue(saint, "saintDiv");
rogue(scorch, "scorchDiv");
rogue(seeker, "seekerDiv");
rogue(sigrid, "sigridDiv");
rogue(switchblade, "switchbladeDiv");
rogue(talon, "talonDiv");
rogue(trench, "trenchDiv");
rogue(umbra, "umbraDiv");
rogue(vivi, "viviDiv");
rogue(vy, "vyDiv");


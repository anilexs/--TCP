function rogue (id){
    $(id).change(function() {
        if ($(id).is(":checked")) {
            console.log("La case est cochée !");
        } else {
            console.log("La case est décochée !");
        }
    });
}


rogue(all);
rogue(soutien);
rogue(défenseur);
rogue(premiére_ligne);
rogue(duellist);
rogue(renseignement);


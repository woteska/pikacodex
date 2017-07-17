var funcs = {
    sec : function() {
        return document.createElement('SECTION');
    },
    div : function() {
        return document.createElement('DIV');
    },
    h5 : function() {
        return document.createElement('H5');
    },
    img : function() {
        return document.createElement('IMG');
    }
};

var pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [ "grass", "poison" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": [ "fire" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": [ "bug", "poison" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "id": 193,
        "name": "Yanma",
        "type": [ "bug", "flying" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
        "id": 152,
        "name": "Chikorita",
        "type": [ "grass" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    }
];

pokemons.forEach(function (p) {
    //<section><div><h5>Seaking</h5></div><div><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png"/></div></section>
    var block = funcs.sec();
    block.appendChild(funcs.div()).appendChild(funcs.h5()).appendChild(funcs.div());
    console.log(block);
});














/*
function getFromApi(poke) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", poke, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    return response;
}

//var api1 = getFromApi("https://pokeapi.co/api/v1/pokedex/1/");
var api2 = getFromApi("https://pokeapi.co/api/v2/pokedex/1/");
var api2 = api2.pokemon_entries;

api2.forEach(function(ent) {
    console.log(ent);
}); */

    /*class Fun {
     sec(){
     return document.createElement('div');
     }
     }
     var fun = new Fun();
     var sec = fun.sec(); */
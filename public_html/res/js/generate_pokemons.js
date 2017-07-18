let funcs = {
    li : function() { return document.createElement('li'); },
    h5 : function() { return document.createElement('h5'); },
    img : function() { return document.createElement('img'); },
    ul : function() { return document.createElement('ul'); },
    a : function() { return document.createElement('a'); },
    text : function(text) { return document.createTextNode(text); }
};

function generateRadialBackground(pokemons) {
    let color = "";
    for(let p in pokemons.type) color += colors[pokemons.type[p]] + " 50%, ";
    return color + "white";
}

function listPokemons(from_search) {

    document.querySelector("main").innerHTML = "";

    pokemons.forEach(function (pokemons) {

        //<section><h5>Seaking</h5><img src="http://a/119.png"/></div></section>
        if(~pokemons.name.toLowerCase().indexOf(from_search.toLowerCase()))
        {
            let li = funcs.li();
            let h5 = funcs.h5();
            let img = funcs.img();
            let a = funcs.a();
            let text = funcs.text(pokemons.name);

            img.setAttribute("src", pokemons.sprite);
            a.setAttribute("href", "http://www.pokemon.com/us/pokedex/" + pokemons.id);
            a.setAttribute("target", "_blank");
            a.appendChild(text);
            h5.appendChild(a);
            img.setAttribute("alt", pokemons.name);
            img.setAttribute("title", pokemons.name);

            img.setAttribute("style", "background: radial-gradient(" + generateRadialBackground(pokemons) + ");");
            // img.setAttribute(
            //     "style", "background: "
            //     +"radial-gradient(circle at 50% 0, rgba(255,0,0,.5), rgba(255,0,0,0) 70.71%),"
            //     +"radial-gradient(circle at 6.7% 75%,  rgba(0,0,255,.5), rgba(0,0,255,0) 70.71%),"
            //     +"radial-gradient(circle at 93.3% 75%, rgba(0,255,0,.5), rgba(0,255,0,0) 70.71%) white;");

            li.appendChild(h5);
            li.appendChild(img);

            return document.querySelector("main").appendChild(li);
        }
    });

    return document.createElement("div");
}

function listColors(colors) {

    for(let c in colors) {

        let li = funcs.li();
        let text = funcs.text(c);
        li.appendChild(text);
        li.setAttribute("style", "color: " + colors[c] + ";");
        document.querySelector("footer").appendChild(li);
    }
}

//list meanings of colors
listColors(colors);
//list pokemons at the opening of the page
document.querySelector("main").appendChild(listPokemons(""));
//list the filtered result for searcing when key is up
document.getElementById("search").addEventListener("keyup",
    (event) => listPokemons(document.getElementById("search").value));



for(let c in pokemonss.pokemon) {
    //console.log("{");
    //console.log("\"id\": " + pokemonss.pokemon[c]["id"] + ",");
    //console.log("\"num\": \"" + pokemonss.pokemon[c]["num"] + "\",");
    //console.log("\"name\": \"" + pokemonss.pokemon[c]["name"] + "\",");
    //console.log("\"img\": \"" + pokemonss.pokemon[c]["img"] + "\",");
    //for(let t in pokemonss.pokemon[c]["type"])
    //var s = pokemonss.pokemon[c]["type"];
    //console.log(pokemonss.pokemon[c]["type"][t].length);
    //console.log(pokemonss.pokemon[c]["type"][t]);
    // console.log("\"type\": " + pokemonss.pokemon[c]["type"] + ",");
    delete pokemonss.pokemon[c]["height"];
    delete pokemonss.pokemon[c]["weight"];
    delete pokemonss.pokemon[c]["candy"];
    delete pokemonss.pokemon[c]["egg"];
    delete pokemonss.pokemon[c]["spawn_chance"];
    delete pokemonss.pokemon[c]["avg_spawns"];
    delete pokemonss.pokemon[c]["spawn_time"];
    delete pokemonss.pokemon[c]["multipliers"];
    delete pokemonss.pokemon[c]["weaknesses"];
    //for(let t in pokemonss.pokemon[c]["type"])
    //console.log(pokemonss.pokemon[c]["type"][t]);
    //console.log(pokemonss.pokemon[c]);
}

/*
 {
 "id": 145,
 "num": "145",
 "name": "Zapdos",
 "img": "http://www.serebii.net/pokemongo/pokemon/145.png",
 "type": [
 "Electric",
 "Flying"
 ],
 "height": "1.60 m",
 "weight": "52.6 kg",
 "candy": "None",
 "egg": "Not in Eggs",
 "spawn_chance": 0,
 "avg_spawns": 0,
 "spawn_time": "N/A",
 "multipliers": null,
 "weaknesses": [
 "Ice",
 "Rock"
 ]
 },
*/

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
 });

 class Fun {
 sec(){
 return document.createElement('div');
 }
 }
 var fun = new Fun();
 var sec = fun.sec();
 */
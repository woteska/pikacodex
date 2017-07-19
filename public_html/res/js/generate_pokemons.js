let funcs = {
    li: function () {
        return document.createElement('li');
    },
    h5: function () {
        return document.createElement('h5');
    },
    img: function () {
        return document.createElement('img');
    },
    ul: function () {
        return document.createElement('ul');
    },
    a: function () {
        return document.createElement('a');
    },
    text: function (text) {
        return document.createTextNode(text);
    }
};

function generateRadialBackground(pokemons) {
    let color = "";
    for (let p in pokemons.type) color += colors[pokemons.type[p].toLowerCase()] + " 50%, ";
    return color + "white";
}

function listPokemons(from_search) {

    document.querySelector("main").innerHTML = "";

    pokemons.forEach(function (pokemons) {

        //<section><h5>Seaking</h5><img src="http://a/119.png"/></div></section>
        if (~pokemons.name.toLowerCase().indexOf(from_search.toLowerCase())) {
            let li = funcs.li();
            let h5 = funcs.h5();
            let img = funcs.img();
            let a = funcs.a();
            let text = funcs.text("#" + pokemons.id + " " + pokemons.name);

            img.setAttribute("src", pokemons.img);
            a.setAttribute("href", "http://www.pokemon.com/us/pokedex/" + pokemons.id);
            a.setAttribute("target", "_blank");
            a.setAttribute("title", "Read more");
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

    for (let c in colors) {

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

/*
console.log(window.scrollY);
window.addEventListener("scroll", (event) => console.log(window.scrollY));


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
 */
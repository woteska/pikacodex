//for older version
let pokemonsss = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": ["grass", "poison"],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": ["fire"],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": ["bug", "poison"],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "id": 193,
        "name": "Yanma",
        "type": ["bug", "flying"],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
        "id": 152,
        "name": "Chikorita",
        "type": ["grass"],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    }
];

//colors of poke codes
let colors = {
    "normal": "#a8a77a",
    "fire": "#ee8130",
    "water": "#6390f0",
    "electric": "#f7d02c",
    "grass": "#7ac74c",
    "ice": "#96d9d6",
    "fighting": "#c22e28",
    "poison": "#a33ea1",
    "ground": "#e2bf65",
    "flying": "#a98ff3",
    "psychic": "#f95587",
    "bug": "#a6b91a",
    "rock": "#b6a136",
    "ghost": "#735797",
    "dragon": "#6f35fc",
    "dark": "#705746",
    "steel": "#b7b7ce",
    "fairy": "#d685ad"
};

//for the newest version
let pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 3,
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 4,
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 6,
        "name": "Charizard",
        "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
        "type": [
            "Fire",
            "Flying"
        ]
    },
    {
        "id": 7,
        "name": "Squirtle",
        "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 8,
        "name": "Wartortle",
        "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 9,
        "name": "Blastoise",
        "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 10,
        "name": "Caterpie",
        "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
        "type": [
            "Bug"
        ]
    },
    {
        "id": 11,
        "name": "Metapod",
        "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
        "type": [
            "Bug"
        ]
    },
    {
        "id": 12,
        "name": "Butterfree",
        "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
        "type": [
            "Bug",
            "Flying"
        ]
    },
    {
        "id": 13,
        "name": "Weedle",
        "img": "http://www.serebii.net/pokemongo/pokemon/013.png",
        "type": [
            "Bug",
            "Poison"
        ]
    },
    {
        "id": 14,
        "name": "Kakuna",
        "img": "http://www.serebii.net/pokemongo/pokemon/014.png",
        "type": [
            "Bug",
            "Poison"
        ]
    },
    {
        "id": 15,
        "name": "Beedrill",
        "img": "http://www.serebii.net/pokemongo/pokemon/015.png",
        "type": [
            "Bug",
            "Poison"
        ]
    },
    {
        "id": 16,
        "name": "Pidgey",
        "img": "http://www.serebii.net/pokemongo/pokemon/016.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "img": "http://www.serebii.net/pokemongo/pokemon/017.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "img": "http://www.serebii.net/pokemongo/pokemon/018.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 19,
        "name": "Rattata",
        "img": "http://www.serebii.net/pokemongo/pokemon/019.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 20,
        "name": "Raticate",
        "img": "http://www.serebii.net/pokemongo/pokemon/020.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 21,
        "name": "Spearow",
        "img": "http://www.serebii.net/pokemongo/pokemon/021.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 22,
        "name": "Fearow",
        "img": "http://www.serebii.net/pokemongo/pokemon/022.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 23,
        "name": "Ekans",
        "img": "http://www.serebii.net/pokemongo/pokemon/023.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 24,
        "name": "Arbok",
        "img": "http://www.serebii.net/pokemongo/pokemon/024.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 25,
        "name": "Pikachu",
        "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 26,
        "name": "Raichu",
        "img": "http://www.serebii.net/pokemongo/pokemon/026.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "img": "http://www.serebii.net/pokemongo/pokemon/027.png",
        "type": [
            "Ground"
        ]
    },
    {
        "id": 28,
        "name": "Sandslash",
        "img": "http://www.serebii.net/pokemongo/pokemon/028.png",
        "type": [
            "Ground"
        ]
    },
    {
        "id": 29,
        "name": "Nidoran",
        "img": "http://www.serebii.net/pokemongo/pokemon/029.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 30,
        "name": "Nidorina",
        "img": "http://www.serebii.net/pokemongo/pokemon/030.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "img": "http://www.serebii.net/pokemongo/pokemon/031.png",
        "type": [
            "Poison",
            "Ground"
        ]
    },
    {
        "id": 32,
        "name": "Nidoran",
        "img": "http://www.serebii.net/pokemongo/pokemon/032.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 33,
        "name": "Nidorino",
        "img": "http://www.serebii.net/pokemongo/pokemon/033.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 34,
        "name": "Nidoking",
        "img": "http://www.serebii.net/pokemongo/pokemon/034.png",
        "type": [
            "Poison",
            "Ground"
        ]
    },
    {
        "id": 35,
        "name": "Clefairy",
        "img": "http://www.serebii.net/pokemongo/pokemon/035.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 36,
        "name": "Clefable",
        "img": "http://www.serebii.net/pokemongo/pokemon/036.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 37,
        "name": "Vulpix",
        "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 38,
        "name": "Ninetales",
        "img": "http://www.serebii.net/pokemongo/pokemon/038.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "img": "http://www.serebii.net/pokemongo/pokemon/039.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "img": "http://www.serebii.net/pokemongo/pokemon/040.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 41,
        "name": "Zubat",
        "img": "http://www.serebii.net/pokemongo/pokemon/041.png",
        "type": [
            "Poison",
            "Flying"
        ]
    },
    {
        "id": 42,
        "name": "Golbat",
        "img": "http://www.serebii.net/pokemongo/pokemon/042.png",
        "type": [
            "Poison",
            "Flying"
        ]
    },
    {
        "id": 43,
        "name": "Oddish",
        "img": "http://www.serebii.net/pokemongo/pokemon/043.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 44,
        "name": "Gloom",
        "img": "http://www.serebii.net/pokemongo/pokemon/044.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 45,
        "name": "Vileplume",
        "img": "http://www.serebii.net/pokemongo/pokemon/045.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 46,
        "name": "Paras",
        "img": "http://www.serebii.net/pokemongo/pokemon/046.png",
        "type": [
            "Bug",
            "Grass"
        ]
    },
    {
        "id": 47,
        "name": "Parasect",
        "img": "http://www.serebii.net/pokemongo/pokemon/047.png",
        "type": [
            "Bug",
            "Grass"
        ]
    },
    {
        "id": 48,
        "name": "Venonat",
        "img": "http://www.serebii.net/pokemongo/pokemon/048.png",
        "type": [
            "Bug",
            "Poison"
        ]
    },
    {
        "id": 49,
        "name": "Venomoth",
        "img": "http://www.serebii.net/pokemongo/pokemon/049.png",
        "type": [
            "Bug",
            "Poison"
        ]
    },
    {
        "id": 50,
        "name": "Diglett",
        "img": "http://www.serebii.net/pokemongo/pokemon/050.png",
        "type": [
            "Ground"
        ]
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "img": "http://www.serebii.net/pokemongo/pokemon/051.png",
        "type": [
            "Ground"
        ]
    },
    {
        "id": 52,
        "name": "Meowth",
        "img": "http://www.serebii.net/pokemongo/pokemon/052.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 53,
        "name": "Persian",
        "img": "http://www.serebii.net/pokemongo/pokemon/053.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 54,
        "name": "Psyduck",
        "img": "http://www.serebii.net/pokemongo/pokemon/054.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 55,
        "name": "Golduck",
        "img": "http://www.serebii.net/pokemongo/pokemon/055.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 56,
        "name": "Mankey",
        "img": "http://www.serebii.net/pokemongo/pokemon/056.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 57,
        "name": "Primeape",
        "img": "http://www.serebii.net/pokemongo/pokemon/057.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 58,
        "name": "Growlithe",
        "img": "http://www.serebii.net/pokemongo/pokemon/058.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 59,
        "name": "Arcanine",
        "img": "http://www.serebii.net/pokemongo/pokemon/059.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 60,
        "name": "Poliwag",
        "img": "http://www.serebii.net/pokemongo/pokemon/060.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "img": "http://www.serebii.net/pokemongo/pokemon/061.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "img": "http://www.serebii.net/pokemongo/pokemon/062.png",
        "type": [
            "Water",
            "Fighting"
        ]
    },
    {
        "id": 63,
        "name": "Abra",
        "img": "http://www.serebii.net/pokemongo/pokemon/063.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 64,
        "name": "Kadabra",
        "img": "http://www.serebii.net/pokemongo/pokemon/064.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 65,
        "name": "Alakazam",
        "img": "http://www.serebii.net/pokemongo/pokemon/065.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 66,
        "name": "Machop",
        "img": "http://www.serebii.net/pokemongo/pokemon/066.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 67,
        "name": "Machoke",
        "img": "http://www.serebii.net/pokemongo/pokemon/067.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 68,
        "name": "Machamp",
        "img": "http://www.serebii.net/pokemongo/pokemon/068.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "img": "http://www.serebii.net/pokemongo/pokemon/069.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "img": "http://www.serebii.net/pokemongo/pokemon/070.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 71,
        "name": "Victreebel",
        "img": "http://www.serebii.net/pokemongo/pokemon/071.png",
        "type": [
            "Grass",
            "Poison"
        ]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "img": "http://www.serebii.net/pokemongo/pokemon/072.png",
        "type": [
            "Water",
            "Poison"
        ]
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "img": "http://www.serebii.net/pokemongo/pokemon/073.png",
        "type": [
            "Water",
            "Poison"
        ]
    },
    {
        "id": 74,
        "name": "Geodude",
        "img": "http://www.serebii.net/pokemongo/pokemon/074.png",
        "type": [
            "Rock",
            "Ground"
        ]
    },
    {
        "id": 75,
        "name": "Graveler",
        "img": "http://www.serebii.net/pokemongo/pokemon/075.png",
        "type": [
            "Rock",
            "Ground"
        ]
    },
    {
        "id": 76,
        "name": "Golem",
        "img": "http://www.serebii.net/pokemongo/pokemon/076.png",
        "type": [
            "Rock",
            "Ground"
        ]
    },
    {
        "id": 77,
        "name": "Ponyta",
        "img": "http://www.serebii.net/pokemongo/pokemon/077.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 78,
        "name": "Rapidash",
        "img": "http://www.serebii.net/pokemongo/pokemon/078.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "img": "http://www.serebii.net/pokemongo/pokemon/079.png",
        "type": [
            "Water",
            "Psychic"
        ]
    },
    {
        "id": 80,
        "name": "Slowbro",
        "img": "http://www.serebii.net/pokemongo/pokemon/080.png",
        "type": [
            "Water",
            "Psychic"
        ]
    },
    {
        "id": 81,
        "name": "Magnemite",
        "img": "http://www.serebii.net/pokemongo/pokemon/081.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 82,
        "name": "Magneton",
        "img": "http://www.serebii.net/pokemongo/pokemon/082.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "img": "http://www.serebii.net/pokemongo/pokemon/083.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 84,
        "name": "Doduo",
        "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 85,
        "name": "Dodrio",
        "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
        "type": [
            "Normal",
            "Flying"
        ]
    },
    {
        "id": 86,
        "name": "Seel",
        "img": "http://www.serebii.net/pokemongo/pokemon/086.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 87,
        "name": "Dewgong",
        "img": "http://www.serebii.net/pokemongo/pokemon/087.png",
        "type": [
            "Water",
            "Ice"
        ]
    },
    {
        "id": 88,
        "name": "Grimer",
        "img": "http://www.serebii.net/pokemongo/pokemon/088.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 89,
        "name": "Muk",
        "img": "http://www.serebii.net/pokemongo/pokemon/089.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 90,
        "name": "Shellder",
        "img": "http://www.serebii.net/pokemongo/pokemon/090.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 91,
        "name": "Cloyster",
        "img": "http://www.serebii.net/pokemongo/pokemon/091.png",
        "type": [
            "Water",
            "Ice"
        ]
    },
    {
        "id": 92,
        "name": "Gastly",
        "img": "http://www.serebii.net/pokemongo/pokemon/092.png",
        "type": [
            "Ghost",
            "Poison"
        ]
    },
    {
        "id": 93,
        "name": "Haunter",
        "img": "http://www.serebii.net/pokemongo/pokemon/093.png",
        "type": [
            "Ghost",
            "Poison"
        ]
    },
    {
        "id": 94,
        "name": "Gengar",
        "img": "http://www.serebii.net/pokemongo/pokemon/094.png",
        "type": [
            "Ghost",
            "Poison"
        ]
    },
    {
        "id": 95,
        "name": "Onix",
        "img": "http://www.serebii.net/pokemongo/pokemon/095.png",
        "type": [
            "Rock",
            "Ground"
        ]
    },
    {
        "id": 96,
        "name": "Drowzee",
        "img": "http://www.serebii.net/pokemongo/pokemon/096.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 97,
        "name": "Hypno",
        "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 98,
        "name": "Krabby",
        "img": "http://www.serebii.net/pokemongo/pokemon/098.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 99,
        "name": "Kingler",
        "img": "http://www.serebii.net/pokemongo/pokemon/099.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 100,
        "name": "Voltorb",
        "img": "http://www.serebii.net/pokemongo/pokemon/100.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 101,
        "name": "Electrode",
        "img": "http://www.serebii.net/pokemongo/pokemon/101.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "img": "http://www.serebii.net/pokemongo/pokemon/102.png",
        "type": [
            "Grass",
            "Psychic"
        ]
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "img": "http://www.serebii.net/pokemongo/pokemon/103.png",
        "type": [
            "Grass",
            "Psychic"
        ]
    },
    {
        "id": 104,
        "name": "Cubone",
        "img": "http://www.serebii.net/pokemongo/pokemon/104.png",
        "type": [
            "Ground"
        ]
    },
    {
        "id": 105,
        "name": "Marowak",
        "img": "http://www.serebii.net/pokemongo/pokemon/105.png",
        "type": [
            "Ground"
        ]
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "img": "http://www.serebii.net/pokemongo/pokemon/106.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "img": "http://www.serebii.net/pokemongo/pokemon/107.png",
        "type": [
            "Fighting"
        ]
    },
    {
        "id": 108,
        "name": "Lickitung",
        "img": "http://www.serebii.net/pokemongo/pokemon/108.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 109,
        "name": "Koffing",
        "img": "http://www.serebii.net/pokemongo/pokemon/109.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 110,
        "name": "Weezing",
        "img": "http://www.serebii.net/pokemongo/pokemon/110.png",
        "type": [
            "Poison"
        ]
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "img": "http://www.serebii.net/pokemongo/pokemon/111.png",
        "type": [
            "Ground",
            "Rock"
        ]
    },
    {
        "id": 112,
        "name": "Rhydon",
        "img": "http://www.serebii.net/pokemongo/pokemon/112.png",
        "type": [
            "Ground",
            "Rock"
        ]
    },
    {
        "id": 113,
        "name": "Chansey",
        "img": "http://www.serebii.net/pokemongo/pokemon/113.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 114,
        "name": "Tangela",
        "img": "http://www.serebii.net/pokemongo/pokemon/114.png",
        "type": [
            "Grass"
        ]
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "img": "http://www.serebii.net/pokemongo/pokemon/115.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 116,
        "name": "Horsea",
        "img": "http://www.serebii.net/pokemongo/pokemon/116.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 117,
        "name": "Seadra",
        "img": "http://www.serebii.net/pokemongo/pokemon/117.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 118,
        "name": "Goldeen",
        "img": "http://www.serebii.net/pokemongo/pokemon/118.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 119,
        "name": "Seaking",
        "img": "http://www.serebii.net/pokemongo/pokemon/119.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 120,
        "name": "Staryu",
        "img": "http://www.serebii.net/pokemongo/pokemon/120.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 121,
        "name": "Starmie",
        "img": "http://www.serebii.net/pokemongo/pokemon/121.png",
        "type": [
            "Water",
            "Psychic"
        ]
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "img": "http://www.serebii.net/pokemongo/pokemon/122.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 123,
        "name": "Scyther",
        "img": "http://www.serebii.net/pokemongo/pokemon/123.png",
        "type": [
            "Bug",
            "Flying"
        ]
    },
    {
        "id": 124,
        "name": "Jynx",
        "img": "http://www.serebii.net/pokemongo/pokemon/124.png",
        "type": [
            "Ice",
            "Psychic"
        ]
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "img": "http://www.serebii.net/pokemongo/pokemon/125.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 126,
        "name": "Magmar",
        "img": "http://www.serebii.net/pokemongo/pokemon/126.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 127,
        "name": "Pinsir",
        "img": "http://www.serebii.net/pokemongo/pokemon/127.png",
        "type": [
            "Bug"
        ]
    },
    {
        "id": 128,
        "name": "Tauros",
        "img": "http://www.serebii.net/pokemongo/pokemon/128.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 129,
        "name": "Magikarp",
        "img": "http://www.serebii.net/pokemongo/pokemon/129.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 130,
        "name": "Gyarados",
        "img": "http://www.serebii.net/pokemongo/pokemon/130.png",
        "type": [
            "Water",
            "Flying"
        ]
    },
    {
        "id": 131,
        "name": "Lapras",
        "img": "http://www.serebii.net/pokemongo/pokemon/131.png",
        "type": [
            "Water",
            "Ice"
        ]
    },
    {
        "id": 132,
        "name": "Ditto",
        "img": "http://www.serebii.net/pokemongo/pokemon/132.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 133,
        "name": "Eevee",
        "img": "http://www.serebii.net/pokemongo/pokemon/133.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "img": "http://www.serebii.net/pokemongo/pokemon/134.png",
        "type": [
            "Water"
        ]
    },
    {
        "id": 135,
        "name": "Jolteon",
        "img": "http://www.serebii.net/pokemongo/pokemon/135.png",
        "type": [
            "Electric"
        ]
    },
    {
        "id": 136,
        "name": "Flareon",
        "img": "http://www.serebii.net/pokemongo/pokemon/136.png",
        "type": [
            "Fire"
        ]
    },
    {
        "id": 137,
        "name": "Porygon",
        "img": "http://www.serebii.net/pokemongo/pokemon/137.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 138,
        "name": "Omanyte",
        "img": "http://www.serebii.net/pokemongo/pokemon/138.png",
        "type": [
            "Rock",
            "Water"
        ]
    },
    {
        "id": 139,
        "name": "Omastar",
        "img": "http://www.serebii.net/pokemongo/pokemon/139.png",
        "type": [
            "Rock",
            "Water"
        ]
    },
    {
        "id": 140,
        "name": "Kabuto",
        "img": "http://www.serebii.net/pokemongo/pokemon/140.png",
        "type": [
            "Rock",
            "Water"
        ]
    },
    {
        "id": 141,
        "name": "Kabutops",
        "img": "http://www.serebii.net/pokemongo/pokemon/141.png",
        "type": [
            "Rock",
            "Water"
        ]
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "img": "http://www.serebii.net/pokemongo/pokemon/142.png",
        "type": [
            "Rock",
            "Flying"
        ]
    },
    {
        "id": 143,
        "name": "Snorlax",
        "img": "http://www.serebii.net/pokemongo/pokemon/143.png",
        "type": [
            "Normal"
        ]
    },
    {
        "id": 144,
        "name": "Articuno",
        "img": "http://www.serebii.net/pokemongo/pokemon/144.png",
        "type": [
            "Ice",
            "Flying"
        ]
    },
    {
        "id": 145,
        "name": "Zapdos",
        "img": "http://www.serebii.net/pokemongo/pokemon/145.png",
        "type": [
            "Electric",
            "Flying"
        ]
    },
    {
        "id": 146,
        "name": "Moltres",
        "img": "http://www.serebii.net/pokemongo/pokemon/146.png",
        "type": [
            "Fire",
            "Flying"
        ]
    },
    {
        "id": 147,
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
            "Dragon"
        ]
    },
    {
        "id": 148,
        "name": "Dragonair",
        "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
        "type": [
            "Dragon"
        ]
    },
    {
        "id": 149,
        "name": "Dragonite",
        "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
        "type": [
            "Dragon",
            "Flying"
        ]
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
        "type": [
            "Psychic"
        ]
    },
    {
        "id": 151,
        "name": "Mew",
        "img": "http://www.serebii.net/pokemongo/pokemon/151.png",
        "type": [
            "Psychic"
        ]
    }
];
const fetchPokemon = () => {
    const nombrePokemon = document.getElementById("nombrePokemon") //Obtenemos lo que este en el input
    let pokemonInput = nombrePokemon.value; //Obtenemos los valores del input
    pokemonInput = pokemonInput.toLowerCase();
    const link = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;
    fetch(link).then((respuesta) => { //Fecth va a consultar a la api, then es para obtener una promesa y recibirmos una funcion que ponemos en una url
        //console.log(respuesta);//Esta es la promesa
        return respuesta.json();
    }).then((datos) => { //Lo que hace es ir y recibir una respuesta
        console.log(datos); //Este es el json

        let pokeImg = datos.sprites.front_default; //Aqui hacemos la consulta del json y soll obtenemos from_default del objeto Sprites que es igual otr objeto
        //console.log(pokeImg);
        pokeImagen(pokeImg);

        let nombrePokemon = datos.species.name;
        //console.log(nombrePokemon);
        nombrePoke(nombrePokemon);

        //console.log(nombrePokemon); //Obtenemos el nombre del pokemon
        let habilidades = []; //Creamos un array vacio
        let habilidad = datos.abilities; //Creamos una variable donde ponemos las habilidades
        //console.log(habilidad); //Array de las habilidades
        habilidad.forEach(function (habilidad) {
            habilidades.push(habilidad.ability.name); //Metemos los datos del for Each al array vacio
        });
        //console.log(habilidades);
        habilidadesPoke(habilidades);

        let type = [];
        let types = datos.types;
        types.forEach(function (types) {
            type.push(types.type.name);
        });
        //console.log(type);
        tipo(type);

        let mov = [];
        let movs = datos.moves;
        //console.log(movs);
        movs.forEach(function (movs) {
            mov.push(movs.move.name);
        });
        movimiento(mov);
        //console.log(mov);

        let static = [];
        let statics = datos.stats;
        //console.log(movs);
        statics.forEach(function (statics) {
            static.push(statics.stat.name);
        });
        estadisticas(static);
        //console.log(mov);
    })
}

const pokeImagen = (url) => {
    const pokemonImagen = document.getElementById("imagen")
    pokemonImagen.src = url;
}
const nombrePoke = (nombre) => {
    const nombrePoke = document.getElementById("pokeNombre");
    nombrePoke.value = nombre;
}
const habilidadesPoke = (hab) => {
    const habiPoke = document.getElementById("pokeHabilidades");
    habiPoke.value = hab;
}
const tipo = (tipoPokemon) => {
    const tipo = document.getElementById("pokeTipo");
    tipo.value = tipoPokemon;
}
const movimiento = (movimientos) => {
    const movimiento = document.getElementById("pokeMovimiento");
    movimiento.value = movimientos;
}
const estadisticas = (staticsPoke) => {
    const estadisticas = document.getElementById("pokeStatics");
    estadisticas.value = staticsPoke;
}
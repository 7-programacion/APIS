let boton = document.getElementById("btn-api");

function traerPokemon() {

    // 🎲 número aleatorio
    let numero = Math.floor(Math.random() * 151) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
        .then(r => r.json())
        .then(data => {

            console.log(data);

            // 🖼️ imagen

            document.getElementById("poke-img").src = data.sprites.other["official-artwork"].front_default;

            // 🏷️ nombre
            document.getElementById("poke-nombre").innerText = data.name;

            // 🔢 id
            document.getElementById("poke-id").innerText = "ID: " + data.id;

            let habilidades = data.abilities
                .map(a => a.ability.name)
                .join(", ");

            document.getElementById("poke-habilidades").innerText =
                "Habilidades: " + habilidades;

        });
}

boton.addEventListener("click", traerPokemon);
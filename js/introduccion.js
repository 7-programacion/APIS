function Saludar(){
    alert("HOLA MUNDO");
}

// Asignamos a la variable miBoton el boton del html con id btn
let miboton = document.getElementById("btn");
miboton.addEventListener("click", Saludar);


let miboton2 = document.getElementById("btn2");

function cambiar_text(){
    let titulo = document.getElementById("titulo");
    titulo.innerText ="ESCUCHANDO NUEVOS EVENTOS";
}

miboton2.addEventListener("click", cambiar_text);
// function Saludar(){
//     alert("HOLA MUNDO");
// }

// // Asignamos a la variable miBoton el boton del html con id btn
// let miboton = document.getElementById("btn");
// miboton.addEventListener("click", Saludar);

// // esta es la forma correcta de usar funciones en javascript

// // miboton.addEventListener("click", function() {
// //     Saludar("Hola");
// // });
// let miboton2 = document.getElementById("btn2");

// function cambiar_text(){
//     let titulo = document.getElementById("titulo");
//     titulo.innerText ="ESCUCHANDO NUEVOS EVENTOS";
// }

// miboton2.addEventListener("click", cambiar_text);

// let TextOriginal = document.getElementById("input");

// TextOriginal.addEventListener("input", function() {
//   document.getElementById("res").innerText = TextOriginal.value;
// });

// document.getElementById("padre").addEventListener("click", () => {
//   console.log("Padre");
// });

// document.getElementById("hijo").addEventListener("click", () => {
// //   console.log("Hijo");
// });



// 
let consulta = document.getElementById("btn-api");
function consumir_api()  {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(r => r.json())
    .then(data => {
        
      document.getElementById("respuesta").innerText = data.value;
    });
}
consulta.addEventListener("click",consumir_api);
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y 
// añadirlo a la lista de amigos creada anteriormente.

//let amigoSecreto = generaramigoSecreto();

//function asignarTextoElemento(elemento,text){
//    let elementoHTML = document.querySelector(elemento);
//    elementoHTML.innerHTML =text;
//    return;
//}

//function campoVacio(){
    //alert('Por favor, inserte un nombre.' );
//    let nombreAmigo = document.querySelector('input');
//    console.log(nombreAmigo === nombreAmigo);
//    if (nombreAmigo === nombreAmigo){
//        asignarTextoElemento('p','El nombre del amigo secreto es: ');
//   }
//    return;
//}

//function generaramigoSecreto() {
    //return Math.floor(Math.random()*5)+1;
//}
//asignarTextoElemento('h1','Amigo Secreto!');
//asignarTextoElemento('p','Por favor, inserte un nombre.')

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    //console.log("Hola")
    if (!inputAmigo.value){
        alert("Por favor, inserte un nombre.")
    }
    listaAmigos.push(inputAmigo.value);
    ulListAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
    
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
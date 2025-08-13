const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    //console.log("Hola")
    if (!inputAmigo.value){
        alert("Por favor, inserte un nombre.")
        return;
    }
    
    listaAmigos.push(inputAmigo.value);
    ulListAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
    return;
    
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}


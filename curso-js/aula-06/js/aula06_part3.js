
//Fazer as variáveis
const nome = prompt("Olá, qual o seu nome?")
const output = document.getElementById("output")

if (nome) {
    //inserir o conteúdo no elemnto com ID "output" 
    output.innerHTML =
    `<p>Olá, <strong>${nome.toUpperCase()}</strong>, prazer em conhecer você!</p> 
    <p>Seu nome tem ${nome.length} letras.</p>`;

} else {
    output.innerHTML = "<p>Você não digitou o seu nome.</p>";
}



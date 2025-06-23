//Mensagem de "olá"
alert("Olá"); 

//Variável nome para armazenar os nomes
let nome = prompt("Qual o seu nome?");

//Condição
if (nome) {
    //Deixar o nome no final com letra maiuscula
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    //Variáveis para gênero e saudação
    let genero;
    let saudacao; 
    
    //Inicia o loop do... while que executa pelo menos uma vez e continua repetindo enquanto a condição depois do while for verdadeira.
    do {
        genero = prompt("Informe seu gênero (M/F): ").toUpperCase();
        
        if (genero === "M") {
            saudacao = "Bem-vindo!";

        } else if (genero === "F") {
            saudacao = "Bem-vinda!"

        } else {
            alert("Genêro inválido")
        }

    } while (!saudacao); //só sai do loop quando o usuário digitar M ou F.
    alert(`${saudacao} ${nome}!`);

} else {
    alert("Você não digitou um nome.");
}
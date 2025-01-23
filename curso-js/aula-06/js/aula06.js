//Mensagem de alerta
//window.prompt("Qual é o seu nome?")// pergunta o nome do usuário

//como armazernar o nome que é enviado pelo usuário?
var nome = window.prompt("Qual é o seu nome?")

//MENSAGEM PARA O USUÁRIO
//window.alert("É um prazer te conhecer, " + nome + "!") //" + nome + "!" se chama concatenação
window.alert(`É um prazer te conhecer, ${nome}!`) // mais usado nessa estrutura. Template string
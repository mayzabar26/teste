
//Nesse código abaixo, vamos fazer um conta simples a partir do número colocado pelo usuário
//Mas temos um problema, o resultado não somou os números porque ele está tratando esses números com STRING
//Para resolver a situação, precisamos converter a string para number

/*
var n1 = window.prompt("Escolha um número: ")
var n2 = window.prompt("Escolha outro número: ")
var resultado = n1 + n2

window.alert(`O resultado é: ${resultado}`)
*/

//RESULTADO
var n1 = Number(window.prompt("Escolha um número: "))
var n2 = Number(window.prompt("Escolha outro número: "))
var resultado = n1 + n2

window.alert(`A soma de ${n1} + ${n2} é igual a ${resultado}`)

// Se eu quiser aceitar apenas números inteiros, coloque: Number.parseInt
// Se eu quiser aceitar apenas números inteiros, coloque: Number.parseFloat
// Colocando só o Number, o computador aceita ambos números
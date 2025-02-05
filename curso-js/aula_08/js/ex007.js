/*
Vimos os operadores:
- relacionais (resultado é TRUE ou FALSE)
- Lógicos
- Ternários

RELACIONAIS
5 > 2  => (5 é maior que 2? Sim, então é TRUE)
7 < 4 => (7 é menor que 4? Não, então é FALSE)
8 >= 8 => (8 é maior ou igual a 4? Sim é igual, então é TRUE)
9 <= 7 => (9 é menor ou igual a 7? Não, ele não é nem menor e nem igual, então é FALSE)
5 == 5 => (5 é igual a 5? Sim, então é TRUE)
4 != 4 => (4 é não igual/diferente a 4? Não, ele é igual, então é FALSE)

   RELACIONAIS > IDENTIDADE
   Os operadores de identidade em JavaScript são usados para comparar valores e tipos de dados. 
   Eles garantem que duas variáveis sejam estritamente iguais ou estritamente diferentes.
   Usamos:
    → Igualdade estrita (===) → Retorna true se os valores e os tipos forem iguais.
    → Desigualdade estrita (!==) → Retorna true se os valores ou os tipos forem diferentes.
    IMPORTANTE: O operador == verifica apenas o valor, convertendo tipos se necessário, enquanto === verifica valor e tipo.


LÓGICOS
* Os operadores lógicos em JavaScript são usados para combinar ou inverter expressões booleanas (true ou false). 
Eles são fundamentais para a criação de condições em estruturas como if, while, entre outras.

 → ‘NÃO’ (!) → Inverte o valor de true para false e vice-versa.
   – Eu quero uma caneta mas ela NÃO pode ser azul. Você pode me entregar qualquer caneta, menos uma azul.

 → ‘E’ (&&) → Retorna true se todas as condições forem true. (Só fica satisfeito se for TRUE). Qualquer outro resultado é FALSE.
   – Eu quero uma caneta azul E uma caneta vermelha. Só ficarei satisfeito se eu tiver uma caneta azul e outra vermelha.

 → ‘OU’ (||) → Retorna true se pelo menos uma condição for verdadeira. (Basta um ser verdadeiro que vai retornar TRUE)
   – Eu quero uma caneta azul OU uma caneta vermelha. Se você me der uma azul, ok. Se me der uma vermelha, ok. 
   Se você me der as duas estarei no lucro. Mas se não me der nenhuma ou em uma cor sem ser azul ou vermelha, teremos um problema.
*/

//DESAFIO 1: CALCULADORA

var escolhaPrimeiro = Number(window.prompt("Digite o primeiro número: "))
var escolhaSegundo = Number(window.prompt("Digite o segundo número: "))
var escolhaOperador = window.prompt("Escolha uma operação (+, -, *, /, %): ")
var resultado;

switch (escolhaOperador) {
    case "+":
        resultado = escolhaPrimeiro + escolhaSegundo;
        break;
    case "-":
        resultado = escolhaPrimeiro - escolhaSegundo;
        break;
    case "*":
        resultado = escolhaPrimeiro * escolhaSegundo;
        break;
    case "/":
        resultado = escolhaSegundo !== 0 ? escolhaPrimeiro / escolhaSegundo : "Erro: divisão por zero!";
        break;
    case "%":
        resultado = escolhaSegundo !== 0 ? escolhaPrimeiro % escolhaSegundo : "Erro: divisão por zero!";
        break;
    default:
        resultado = "Operação inválida!";
}

window.alert(`${escolhaPrimeiro} ${escolhaOperador} ${escolhaSegundo} é igual a ${resultado}`)

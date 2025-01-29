//Function to change color
//Doesn't need to create a variable outside the function


//Function to change color
function colorChange() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    /* EXPLICAÇÃO
    1. A variável randomColor gera uma cor hexadecimal aleatória

    2. Math.random() gera um número decimal entre 0 e 1.

    3. Multiplicamos por 16777215 (que é FFFFFF em decimal, ou seja, o maior valor de cor em RGB).
   
    4. Math.floor() arredonda o número para um inteiro.

    5. .toString(16) converte esse número para uma string hexadecimal.

    6.O # é adicionado no início para formar um código de cor válido (exemplo: #a3f4b2).
    */
}

//Variable to store the colors
document.getElementById('changeColorBtn').addEventListener('click', colorChange);
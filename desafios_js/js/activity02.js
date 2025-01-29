//1. Creating the variables
const clicksButton = document.getElementById('clicksbtn')
const clickCounter = document.getElementById('clicksCounter')
const resetButton = document.getElementById('reset')

//2. Create variable to store clicks
let counter = 0; 

//3. Create function to start the counter
function startCounter() {
    counter++; // Incrementa o contador, ou seja, adiciona 1 ao valor (counter + 1;)
    clickCounter.textContent = counter; // Atualiza o número na tela
}

// 4. Add event to the click button
clicksButton.addEventListener('click', startCounter);

//5. Create function to reset the clicks
function resetcounter() {
    counter = 0
    clickCounter.textContent = counter;
}

//6. Add event to the reset button
resetButton.addEventListener('click', resetcounter);



/* IMPORTANTE:
-- Se o código for reutilizado, grande ou precisar de mais organização, use funções.
-- Se for simples e usado apenas uma vez, não precisa de função.
 
Exemplo abaixo de um contador em um eventlistener:

clicksButton.addEventListener("click", () => {
    counter++;
    clickCounter.textContent = counter;
})

*/
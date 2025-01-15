//Selecionando os elementos
const countdown = document.getElementById("countdown");
const startBtn  = document.getElementById("start-btn");
const stopBtn = document.getElementById("pause-btn");
const customTime = document.getElementById("customTime");

//Variável para armazenar o tempo de começo (10 segundos)
let timeLeft = 11; //Tempo inicial em segundos
let intervalId; //Para armazenar o ID do setInterval
let isPaused = false; 

//Eventlistener para o botão de start
startBtn.addEventListener("click", () => {
    //Usando setInterval 
    const settingInterval = setInterval(() => {
        timeLeft--; //Decrementa o tempo
        countdown.textContent = timeLeft; //Atualiza o <h1> com o tempo restante

        //Verifica se o tempo chegou a 0
        if (timeLeft <= 0) {
            clearInterval(settingInterval); //Parar o intervalo quando o tempo acabar
            countdown.textContent = "Time's up!"; //Exibir mensagem de Time's up!
        }
    }, 1000); // Decrementa a cada 1 segundo (1000 milissegundos)
});
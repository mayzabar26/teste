// Selecionando os elementos
const countdown = document.getElementById("countdown");
const startBtn  = document.getElementById("start-btn");
const pauseResumeBtn = document.getElementById("pause-btn");
const customTimeInput = document.getElementById("customTime");

// Variáveis para controlar o tempo e o estado do intervalo
let timeLeft = 11; // Tempo inicial em segundos
let isPaused = false; // Variável para controlar o estado de pausa
let settingInterval; // Variável para armazenar o intervalo

// Função para iniciar ou reiniciar o cronômetro
function startCountdown() {
    const customTime = parseInt(customTimeInput.value);
    timeLeft = !isNaN(customTime) && customTime > 0 ? customTime : 11; // Se o valor for válido, usa ele, senão usa o valor padrão
    countdown.textContent = timeLeft;

    clearInterval(settingInterval); // Limpa o intervalo anterior, se houver

    settingInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--; // Decrementa o tempo
            countdown.textContent = timeLeft; // Atualiza o display

            if (timeLeft <= 0) {
                clearInterval(settingInterval); // Parar o intervalo
                countdown.textContent = "Time's up!"; // Exibir mensagem de "Time's up!"
            }
        }
    }, 1000); // Decrementa a cada 1 segundo
}

// Eventlistener para o botão de start
startBtn.addEventListener("click", startCountdown);

// Eventlistener para o botão de Pausar/Retomar
pauseResumeBtn.addEventListener("click", () => {
    isPaused = !isPaused; // Alterna entre pausar e retomar
    pauseResumeBtn.textContent = isPaused ? "Resume" : "Pause"; // Altera o texto do botão
});

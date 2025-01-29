//Passo 1: Criar as variáveis
const paragraph = document.getElementById("text")
const changeBtn = document.getElementById("changebtn")

//Passo 2: Fazer o evento listener para o clique do btn
changeBtn.addEventListener("click", () => {
    //Passo 3: Alterar o texto aqui com o textContent
    paragraph.textContent = "Texto alterado! Parabéns, você conseguiu;"
})
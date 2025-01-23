//Passo 1: Criar as variáveis
const paragraph = document.getElementById("text")
const changeBtn = document.getElementById("changebtn")

//Fazer o evento listener para o clique do btn
changeBtn.addEventListener("click", () => {
    //alterar o texto aqui com o textContent
    paragraph.textContent = "Texto alterado! Parabéns, você conseguiu;"
})
alert("BEM-VINDA AO BAILE DE INVERNO DE RIVERDALE HIGH!");

//Perguntar o nome e armazenar na variável
let nome = prompt("Digite seu nome: ")

//Condição: Se for Cheryl, vai ser aceita, se for outro nome, vai ser negado
if (nome.toLowerCase() !== "cheryl") {
    alert("Desculpe, nome errado. Apenas Cheryl Blossom é aceita nesse baile.")

} else {
    alert("Cheryl Blossom está pronta para causar no baile!")

    //Vamos escolher o look
    let look = prompt(
        "Escolha seu look:\n" +
        "1 - Vestido azul turquesa" +
        "2 - Saia preta curta e blusa vermelha transparent" +
        "3 - Vestido vermelho brilhante"
    );

    //Variável para armazenar a pontuação ao escolher um look
    let impacto = 0;

    //Condição do look
    if (look === "1") {
        alert("💎 O vestido vermelho brilhante vai fazer Toni Topaz desmaiar!");
        impacto += 30;

    } else if (look === "2") {
        alert("🤔 Saia preta e blusa vermelha é uma opção... mas não para o baile de inverno!");
        impacto += 20
        
    } else if (look === "3") {
        alert("🔥 O vestido vermelho brilhante vai fazer Toni Topaz desmaiar!")
        impacto += 50;

    } else {
        alert("❌ Look inválido. Cheryl vai usar um pijama por falta de opção.");
        impacto -= 10;
    }

    //Entrada triunfal (repetição)
    let entrada = prompt()
}
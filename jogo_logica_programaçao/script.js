alert("BEM-VINDA AO BAILE DE INVERNO DE RIVERDALE HIGH!");

// Perguntar o nome e armazenar na variável
let nome = prompt("Digite seu nome:");

// Enquanto o nome for diferente de "cheryl", repete a pergunta
while (nome.toLowerCase() !== "cheryl") {
    alert("Desculpe, nome errado. Apenas Cheryl Blossom é aceita nesse baile.");
    nome = prompt("Digite seu nome:");
}

alert("Cheryl Blossom está pronta para causar no baile!");

// Escolher o look
let look = prompt(
    "Escolha seu look:\n\n" +
    "1️⃣ - Vestido azul turquesa\n" +
    "2️⃣ - Saia preta curta e blusa vermelha transparente\n" +
    "3️⃣ - Vestido vermelho brilhante"
);

// Variável para armazenar a pontuação
let impacto = 0;

// Condição do look
if (look === "1") {
    alert("💎 O vestido azul turquesa reluz sob as luzes do baile!");
    impacto += 30;

} else if (look === "2") {
    alert("🤔 Saia preta e blusa vermelha é uma opção... mas não para o baile de inverno!");
    impacto += 20;

} else if (look === "3") {
    alert("🔥 O vestido vermelho brilhante vai fazer Toni Topaz desmaiar!");
    impacto += 50;

} else {
    alert("❌ Look inválido. Cheryl vai usar um pijama por falta de opção.");
    impacto -= 10;
}

// Escolher a entrada triunfal
let entrada = prompt(
    "Escolha a sua entrada triunfal:\n\n" +
    "1️⃣ - Descer da escadaria com uma rosa na boca\n" +
    "2️⃣ - Entrar de helicóptero\n" +
    "3️⃣ - Surgir do chão com máquina de fumaça"
);

// Condição da entrada
if (entrada === "1") {
    alert("Poética. Um silêncio absoluto toma conta da festa.");
    impacto += 35;

} else if (entrada === "2") {
    alert("Escandalosa. Veronica aplaude de pé.");
    impacto += 40;

} else if (entrada === "3") {
    alert("Sobrenatural. Archie derruba o ponche de susto.");
    impacto += 20;

} else {
    alert("❌ Cheryl tropeça na porta e finge que foi de propósito.");
    impacto -= 5;
}

// Escolher a dança
let danca = prompt(
    "Escolha sua performance na pista:\n\n" +
    "1️⃣ - Roda 5 vezes com pose a cada giro\n" +
    "2️⃣ - Dança em cima da mesa do DJ\n" +
    "3️⃣ - Tango explosivo com Toni"
);

// Condição da dança
if (danca === "1") {
    alert("A plateia filma. Isso vai parar nas redes sociais.");
    impacto += 25;

} else if (danca === "2") {
    alert("O DJ grita seu nome!!");
    impacto += 45;

} else if (danca === "3") {
    alert("A química entre Cheryl e Toni quebra termômetros.");
    impacto += 60;

} else {
    alert("❌ Cheryl dá uma dancinha desengonçada. Jughead ri. Imperdoável.");
    impacto -= 15;
}

// Mostrar a pontuação final
alert("Pontuação final de impacto social: " + impacto);

// Final de acordo com a pontuação
if (impacto >= 100) {
    alert("FINAL LENDÁRIO: Cheryl é coroada rainha do baile!");

} else if (impacto >= 80) {
    alert("FINAL GLAMUROSO: Cheryl domina o baile e sai de mãos dadas com Toni.");

} else if (impacto >= 50) {
    alert("FINAL OKAY: Cheryl arrasa, mas ninguém desmaia. Ainda assim, ícone.");

} else {
    alert("FINAL FLOPADO: Cheryl não brilhou. Vai precisar planejar o próximo com mais drama.");
}


//*****SEQUÊNCIA DO JOGO*****
//1. Perguntar o nome + condição. 

//2. Escolha o look + pontuação + condição

//3. Escolha entrada triunfal + pontuação + condição

//4. Escolha a dança + pontuação + condição 
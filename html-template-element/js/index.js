//Selecionando os elementos
const template = document.getElementById("prophet-card");
const mainContainer = document.body;

//Conectando o arquivo JSON
async function loadJSON() {
    try{
        // Fazendo a requisição do arquivo JSON
        const response = await fetch("json/prophet.json");

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo JSON: ${response.statusText}`);
        }

        // Convertendo a resposta para um objeto JSON
        const data = await response.json();

        // Iterando sobre os dados dos profetas
        data.prophets.forEach(prophet => {
            // Clonando o conteúdo do template
            const clone = template.content.cloneNode(true);

            // Selecionando e preenchendo os elementos dentro do template
            const section = clone.querySelector(".card");
            section.querySelector("h2").textContent = `${prophet.name} ${prophet.lastname}`;
            section.querySelectorAll("p")[0].textContent = `Birthdate: ${prophet.birthdate}`;
            section.querySelectorAll("p")[1].textContent = `Birthplace: ${prophet.birthplace}`;
            const img = section.querySelector("img");
            img.src = prophet.imageurl;
            img.alt = `${prophet.name} ${prophet.lastname}`;

            // Adicionando o card ao DOM
            mainContainer.appendChild(clone);
        });
    
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
};

loadJSON();
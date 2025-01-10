const name = "Madelaine";
const lastName = undefined;
const age = 30;
const ocupation = "actor";
const country = "USA";

const pessoa = {
    name: "Madelaine",
    lastName: "Petsch",
    age: 30,
    ocupation: "actor",
    country: "USA"
};

console.log(pessoa)

//Caso eu queria colocar mais pessoas no meu objeto, eu posso usar um array. 
//Ou seja, fazer uma lista com as informações sobre as pessoas.


//adicionando mais elementos ao objeto
pessoa.moviesDone = 7; //PRIMEIRA FORMA DE ADICIONAR ELEMENTOS É ATRAVÉS DO OBJECT.PROPERTY

pessoa["seriesDone"] = 2; //SEGUNDA FORMA DE ADICIONAR ELEMENTOS É ATRAVÉS DE []

//Para valores fixos
Object.defineProperty(pessoa, "address", { //TERCEIRA FORMA DE ADICIONAR ELEMENTOS É ATRAVÉS DE OBJECT.DEFINEPROPERTY
    value: 1,
    writable: false, //significa que o valor não pode mudar
})
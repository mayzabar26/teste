const nomes = {
    1: "Madelaine",
    2: "Mayza",
    3: "Cheryl",
    4: "Marjorie",
    5: "Betty",
    6: "Verônica"
};

//COMO PERCORRER O OBJETO EM LOOP?

//1: USANDO O FOREACH
Object.keys(nomes).forEach(function(item) {
    console.log(item + " - " + nomes[item]);
});


//2: USANDO O FOR IN
for(const item in nomes) {
    console.log(item + " - " + nomes[item]);
}


//3: USANDO OBJECT.ENTRIES
for(const [key, value] of Object.entries(nomes)) {
    console.log(key + " - " + value);
}
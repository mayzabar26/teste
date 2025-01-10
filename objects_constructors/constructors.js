//Exemplo sem constructors
function createPerson(name) {
    const obj = {} //Objecto vazio
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj //vai retornar o obj
}

//Criando mais objetos
const madelaine = createPerson("Madelaine Petsch");
madelaine.introduceSelf();

const cheryl = createPerson("Cheryl Blossom");
cheryl.introduceSelf();

const mayza = createPerson("Mayza Barbosa");
mayza.introduceSelf();




//Exemplo usando constructors
function Person(name) {
    this.name = name
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`)
    }
}

//Criando mais objetos
const jane = new Person("Jane");
jane.introduceSelf();

const marissa = new Person("Marissa");
marissa.introduceSelf();




//Constructors com Classes e instances
class Professor {
    constructor(name, teaches) {
        this.name = name;
        this.teaches = teaches;
    }
    
    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`);
    }
}

const petsch = new Professor("Madelaine", "Psychology");
petsch.introduceSelf(); // "My name is Professor Walsh and I will be your Psychology professor."



//Constructors com Classes e herança
//Pai
class PersonName {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    grade(paper) {}
    introduceSelf() {
        console.log(`My name is ${this.name} ${this.lastName}.`);
    }

}

//Herança - filho
class Student extends PersonName {
    constructor(name, year) {
        super(name);
        this.year = year;
    }
    introduceSelf() {
        console.log(`My name is ${this.name} and I'm in the ${this.year} year.`);
    }
}

const blossom = new PersonName("Julian", "Blossom")
blossom.introduceSelf(); //"My name is Julian Blossom."

const summers = new Student("Summers", 1);
summers.introduceSelf(); // "My name is Summers and I'm in the 1st year."  


//Encapsulation
class CheckStudent {
    #year; // Propriedade privada
    constructor(name, year) {
        this.name = name;
        this.#year = year;
    }
    
    canStudyArchery() {
        console.log(this.#year > 1);
    }
}

const andrews = new CheckStudent("Andrews", 1);
andrews.canStudyArchery(); // false

const topaz = new CheckStudent("Topaz", 3);
topaz.canStudyArchery(); // true
  
//Este é o arquivo que vai ser importado no outro doc JS, ou seja, esse é o que vai ser reciclado

//Criando lista de cursos
const cursos = ["JavaScript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]
const carros = ["Polo", "T-Cross", "Golf", "Cruze", "Argo", "Onix", "Cronos"]

//const getTodosCursos =()=> { //ARROW FUNTION
   // return getTodosCursos
//}

//OU

export default function getTodosCursos(){ //PYTHON FUNCTION
    return cursos 
}

export {cursos} 
//export default getTodosCursos //USAMOS ESSE SE FORMOS USAR ARROW FUNCTION
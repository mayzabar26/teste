
//Passo 1: Criar o object
//Criar objeto TaskManager
const TaskManager = {
    tasks: [], //Lista de tarefas vazia

    //Passo 2: Criar 3 métodos (add/ listar/ remove)  
    //Adicionando uma tarefa
    addTask(task) {
        this.tasks.push(task);
        console.log(`Tarefa "${task}" adicionada com sucesso!`);
    },

    //Listando as tarefas usando if e else
    listTask() {
        if (this.tasks.length === 0) {
            console.log("Nenhuma tarefa encontrada.");
        } else {
            console.log("Lista de tarefas:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    },

    //Removendo uma tarefa pelo índice
    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            const removed = this.tasks.splice(index, 1);
            console.log(`Tarefa "${removed}" removida com sucesso!`);
        } else {
            console.log("Índice inválido. Tente novamente.")
        }
    },
};

//Vamos usar module aqui
export default TaskManager;


//Operadores usados são:
// ===: Operador de comparação restrita. Verifica se 2 valores são iguais e do mesmo tipo

// +: Operador de incremento. Aumenta o valor de uma variável em 1.

// &&: Retorna true se ambos os operandos forem verdadeiros. Caso contrário. retorna false.

//>=: Operador de comparação maior ou igual.

//<: Operador de comparação menor que.
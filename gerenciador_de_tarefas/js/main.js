//Vamos importar o código do arquivo taskManager.   (module)

import TaskManager from "./taskManager.js";

//Usando o TaskManager
console.log("Bem-vindo ao Gerenciador de Tarefas!")

//Adicionando tarefas
TaskManager.addTask("Estudar JavaScript");
TaskManager.addTask("Fazer atividades da BYU");
TaskManager.addTask("Aula instituto na quarta");
TaskManager.addTask("Team activity meeting na quinta");

//Visualizar toda a lista de tarefas
TaskManager.listTask()

//Removendo uma tarefa
TaskManager.removeTask([3]);

TaskManager.listTask()
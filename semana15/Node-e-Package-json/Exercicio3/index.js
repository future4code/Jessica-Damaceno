// Exercício 3

const tarefas = ["Fazer comida", "Estudar", "Arrumar a casa"];
const novaTarefa = process.argv[2];

const listaDeTarefas = tarefas.push(novaTarefa);
console.table("Tarefa adicionada com sucesso! Tarefas:");
console.table(tarefas);

//Resultado lindo! <3
// Tarefa adicionada com sucesso! Tarefas:
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │   'Fazer comida'   │
// │    1    │     'Estudar'      │
// │    2    │  'Arrumar a casa'  │
// │    3    │ 'continuar estudo' │
// └─────────┴────────────────────┘
//no terminal, ex: npm run start "estudar+"

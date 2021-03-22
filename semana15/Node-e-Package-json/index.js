// Exercício 1
// a) Para acessar os parâmetros na linha de comando para o Node, utilizamos a propriedade process.argv.

// b)
// const idade = Number(process.argv[3]);

// console.log(`Olá, ${process.argv[2]}, você tem ${idade} anos.`);
//no terminal, ex: npm run start Jess 29

// c)
// const idade = Number(process.argv[3]);
// const novaIdade = Number((process.argv[4] = Number(process.argv[3]) + 7));

// console.log(
//   `Olá, ${process.argv[2]}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`
// );
//no terminal, ex: npm rum start Jess 29
// Exercício 2

// const opMat = process.argv[2];
// const x = Number(process.argv[3]);
// const y = Number(process.argv[4]);

// switch (opMat) {
//   case "soma":
//     console.log(x + y);
//     break;
//   case "sub":
//     console.log(x - y);
//     break;
//   case "mult":
//     console.log(x * y);
//     break;
//   case "div":
//     console.log(x / y);
//     break;
// }
//no terminal, ex: npm run start soma num1 num2

// Desafios

// blue = "\u001b[34m";
// red = "\u001b[31m";
// green = "\033[0;32m";

// if (opMat && x && y) {
//   console.log(green, `${opMat} ${x} ${y}`);
// } else {
//   console.log("\u001b[31m", `Esperava 2 parâmetros só recebi um.`);
// }

// Exercício 3

// const tarefas = ["Fazer comida", "Estudar", "Arrumar a casa"];
// const novaTarefa = process.argv[2];

// const listaDeTarefas = tarefas.push(novaTarefa);
// console.table("Tarefa adicionada com sucesso! Tarefas:");
// console.table(tarefas);

//Resultado lindo! <3
//Tarefa adicionada com sucesso! Tarefas:
// ┌─────────┬──────────────────┐
// │ (index) │      Values      │
// ├─────────┼──────────────────┤
// │    0    │  'Fazer comida'  │
// │    1    │    'Estudar'     │
// │    2    │ 'Arrumar a casa' │
// │    3    │    'estudar+'    │
// └─────────┴──────────────────┘
//no terminal, ex: npm run start "estudar+"

// Exercício 1
// a) Para acessar os parâmetros na linha de comando para o Node, utilizamos a propriedade process.argv.

// b)
const idade = Number(process.argv[3]);

console.log("\033[0;32m", `Olá, ${process.argv[2]}, você tem ${idade} anos.`);

//no terminal, ex: npm run start Jess 29
// c)
// const idade = Number(process.argv[3]);
// const novaIdade = Number((process.argv[4] = Number(process.argv[3]) + 7));

// console.log(
//   "\u001b[34m",
//   `Olá, ${process.argv[2]}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`
// );
//no terminal, ex: npm rum start Jess 29
// Desafios

const blue = "\u001b[34m";
const red = "\u001b[31m";
const green = "\033[0;32m";

if (process.argv[2] && process.argv[3]) {
  console.log();
} else {
  console.log("\u001b[31m", `Esperava 2 parâmetros só recebi um.`);
}

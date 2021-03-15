// Exercício 1
// a) Para acessar os parâmetros na linha de comando para o Node, utilizamos a propriedade process.argv.

// b)
// const idade = Number(process.argv[3]);

// console.log(`Olá, ${process.argv[2]}, você tem ${idade} anos.`);

// c)
// const idade = Number(process.argv[3]);
// const novaIdade = Number((process.argv[4] = Number(process.argv[3]) + 7));

// console.log(
//   `Olá, ${process.argv[2]}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`
// );

// Exercício 2

const opMat = process.argv[2];
const x = Number(process.argv[3]);
const y = Number(process.argv[4]);

switch (opMat) {
  case "soma":
    console.log(x + y);
    break;
  case "sub":
    console.log(x - y);
    break;
  case "mult":
    console.log(x * y);
    break;
  case "div":
    console.log(x / y);
    break;
}

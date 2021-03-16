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
//no terminal, ex: npm run start soma num1 num2
//Exericio 1 
//a)
let minhaString: string = "texto";
//minhaString = 4 // ele manifesta um erro, devido ao tipo da variável ser string, eu ter colocado um numero

//b) 
let meuNumero: number | string = "teste"
// ao adicionar o símbolo | entre os tipos, podemos fazer declarações de mais de um tipo a mesma variável.

//c)
const exemplo1 = {
    nome: "Jéssica",
    idade: 29,
    corFavorita: "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string,
}

//d)
enum corFavorita {
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    Anil = "Anil",
    Violeta = "Violeta",
}

//c)
const exemplo2: pessoa = {
    nome: "JJ",
    idade: 29,
    corFavorita: corFavorita.Violeta
}
const exemplo3: pessoa = {
    nome: "Jéssica",
    idade: 29,
    corFavorita: corFavorita.Azul
}
const exemplo4: pessoa = {
    nome: "Jéssica",
    idade: 29,
    corFavorita: corFavorita.Anil
}

console.log(exemplo4)

    






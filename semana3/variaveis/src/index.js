// RESOSTAS DOS EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
 
/*Exercício 1:
 console.log (b) = 10
 console.log (a, b) = 10, 5

 Exercício 2:
 console.log(a, b, c) = 10, 10, 10,*/




//RESOSTAS DOS EXERCICIOS DE ESCRITA DE CÓDIGO

//Exercício 1:

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// Foi impresso um tipo undefined, pois não havia um valor na variável.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//Notei que saiu para mim a informação de duas strings, pois ambas variáveis estavam entre aspas, tanto o nome, quanto o número.


console.log("Olá ", nome, ", você tem ", idade, " anos.")

//Exercício 2:

let generoFilme = prompt("Um gênero de filme")
let prefereImóvelOuTrailer = prompt("O que você prefere, um imovél ou um tráiler?")
let trêsAnimais = prompt("Três animais de estimação.")
let VoarOuRespirarBaixoDágua = prompt("Se você pudesse escolher entre voar ou respirar em baixo d'água, o que escolheria?")
let umaFrase = prompt("Escreva uma frase.")

console.log("1. Um gênero de filme")
console.log("Resposta:", generoFilme)

console.log("2. O que você prefere, um imovél ou um tráiler?")
console.log("Resposta", prefereImóvelOuTrailer)

console.log("3. Três animais de estimação")
console.log("Resposta", trêsAnimais)

console.log("4. Se você pudesse escolher entre voar ou respirar em baixo d'água, o que escolheria?")
console.log("Resposta", VoarOuRespirarBaixoDágua)

console.log("5. Escreva uma frase.")
console.log("Resposta", umaFrase)


// Exercicío 3


let comidasPreferidas = ["Comidas veganas variadas", "Panquecas", "Saladas variadas", "HotRoll", "Sucos naturais variados"]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


let comida = prompt("Qual a sua comida preferida?")
comidasPreferidas[1] = comida
console.log(comidasPreferidas)


// Exercício 4










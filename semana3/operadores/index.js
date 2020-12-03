// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1

resultado de a = falso

resultado de b = falso

resultado de c = truo 

resultado de e = tipo booleans


// Exercício 2

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9


// EXERCÍCIO DE ESCRITA DE CÓDIGO

//Exercício 1

//a) e b)
 let idade = Number( prompt("digite aqui a sua idade"))
 let idadeMelhorAmigo = Number( prompt("digite aqui a sua idade"))
 let resposta = idade > idadeMelhorAmigo
 let diferencaIdade = idade - idadeMelhorAmigo
//c) e d)
 console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)
 alert(resposta)
 alert(diferencaIdade)


 // Exercício 2

//a) 
let numeroPar = Number( prompt("insira um número par"))
//b) 
let restoDaDivisao = numeroPar % 2
alert(restoDaDivisao)
//c) Existe um padrão, onde o resultado do resto da divisão de um numero par dividido por 2, sempre será 0.
//d) Existe um padrão, onde o resto da divisão de um numero ímpar divido por 2, sempre vai dar 1.


// Exercício 3


//a 
listaDeTarefas = []
//b
tarefaN1 = prompt("Pode digitar aqui a sua primeira tarefa de hoje.")
tarefaN2 = prompt("Pode digitar aqui a sua segunda tarefa de hoje.") 
tarefaN3 = prompt("Pode digitar aqui a sua terceira tarefa de hoje.")

listaDeTarefas.push(tarefaN1, tarefaN2, tarefaN3)
//c
alert(listaDeTarefas)
console.log(listaDeTarefas)
//d
indice = Number( prompt("Digite aqui o numero de uma tarefa que você já realizou, entre 0, 1 ou 2"))
//e
listaDeTarefas.splice(indice, 1)
//f
alert(listaDeTarefas)
console.log(listaDeTarefas)

// Exercício 4

nomeDoUsuario = prompt("Por favor, digite aqui o seu nome")
emailDoUsuario = prompt("Por favor, digite aqui o seu e-mail")

alert(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)


//outro modo de separar a variavel da string, com virgula nas variáveis e crase/aspas em casa string:

// mensagem que aparece para a pessoa:
// alert("O e-mail", emailDoUsuario , "foi cadastrado com sucesso. Seja bem-vindo(a)", nomeDoUsuario, "!")

//mensagem que aparece no console:
// console.log(`O e-mail`, emailDoUsuario , `foi cadastrado com sucesso. Seja bem-vindo(a)`, nomeDoUsuario, `!`)




 



 








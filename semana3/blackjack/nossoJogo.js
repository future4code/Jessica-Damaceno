/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Olá! Este é o jogo Blackjack!")
   
if (confirm("Quer iniciar uma nova rodada?")) {  //2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?". 4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
   console.log ("Bem vindo(a) ao Blackjack!") //1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".
   
   let carta1Pessoa = comprarCarta()
   let carta2Pessoa = comprarCarta()
   let carta1PC = comprarCarta()
   let carta2PC = comprarCarta()
   let pontosDaPessoa = carta1Pessoa.valor + carta2Pessoa.valor
   let pontosDoPC = carta1PC.valor + carta2PC.valor
   //6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado...
   console.log(`Pessoa - cartas: ${carta1Pessoa.texto} ${carta2Pessoa.texto} - ${pontosDaPessoa}`)
   console.log(`Computador - cartas: ${carta1PC.texto} ${carta2PC.texto} - ${pontosDoPC}`)
   //uso de crase para separar texto que leva a variável dentro e o ${}
   //sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e 7. informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
   if (pontosDaPessoa > pontosDoPC) {
      console.log("Você venceu!")
  } else if (pontosDoPC > pontosDaPessoa) {
      console.log("O computador venceu!")
   } else if (pontosDaPessoa === pontosDoPC) {
      console.log("Empate!")
   } 

 } else {
  console.log("O jogo acabou") //3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou"
}
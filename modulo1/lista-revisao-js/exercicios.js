// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()



// EXERCÍCIO 01
//array: [0,8,23,16,10,15,41,12,13]
//Esperada: 3
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length

    //console.log(tamanhoArray) // apenas para testar
   return tamanhoArray
}

// EXERCÍCIO 02
//array: [0,8,23,16,10,15,41,12,13]
function retornaArrayInvertido(array) {
    const arrayInvertido = array.slice(0).reverse()
  
  //   console.log(arrayInvertido) // apenas para testar
      return arrayInvertido
}


// EXERCÍCIO 03
//array: [36,12,56,7,3]
function retornaArrayOrdenado(array) {
  const arrayOrdenado = array.sort(function(a,b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
  })
  
  //console.log(arrayOrdenado) // apenas para testar
 return arrayOrdenado
}


// EXERCÍCIO 04
//array: [1,2,3,4,5,6,7,8]
//Esperada: [2,4,6,8]
function retornaNumerosPares(array) {
 
  const pairNumbers = array.filter(x => x % 2 === 0)
   
     // console.log(pairNumbers) // apenas para testar

  return pairNumbers  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
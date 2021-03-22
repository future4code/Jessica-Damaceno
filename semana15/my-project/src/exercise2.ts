//a)
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a entrada é um array de numeros
// a saída é o que está sendo retornado: estatisticas

//b) Existem três variaveias: numerosOrdenados, soma e estatisticas, do tipo number.

//c) 
type amostraDeIdades = {

    numeros: number[],

    obterEstatisticas: (numeros: number[]) => {

    }
}
console.log(obterEstatisticas([1, 2, 15, 50]))


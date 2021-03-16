//a) Passos: 1. Entrei na pasta onde se esntrava o arquivo; 2. Rodei o comando tsc nome-do-arquivo.ts e ele criou um arquivo equivalente com extensão em js.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) 

//c) A maneira de transpilar multiplos arquivos de uma vez é rodando tsc nome-do-arquivo1 nome-do-arquivo2 e assim sucessivamente.
//d) que chama mais atenção são as explicações correspondentes para cada função das propriedades. E o fado de estarem comentadas, dando a possibilades de apenas descomentar para abilitá-las.
Exercício 1
a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node? <EXERCÍCIO OK!>
b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
//"Olá, (Nome)! Você tem (sua idade) anos." <EXERCÍCIO OK!>
b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)" <EXERCÍCIO OK!>

Exercício 2
Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos. <EXERCÍCIO OK!>

Exercício 3
Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada. <EXERCÍCIO OK!>

Como ficou:
Tarefa adicionada com sucesso! Tarefas:
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │  'Fazer comida'  │
│    1    │    'Estudar'     │
│    2    │ 'Arrumar a casa' │
│    3    │    'estudar+'    │
└─────────┴──────────────────┘

Exercício 4
Transforme os exercícios anteriores em pacotes individuais do Node (crie uma pasta para cada um)

O pacote deve:

- Conter um `package.json`
- Ter um script `start` configurado e funcionando. <EXERCÍCIO OK!>

Desafios

- Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um." <DESAFIO OK!>
- Volte nos exercícios 1 e 2 e faça com que o texto impresso no terminal (usando`console.log`) seja colorido. <DESAFIO OK!>
- Procure uma maneira de persistir os dados nas suas aplicações (**Dica**: consulte as referências do início dessa página. O Node possui um módulo nativo para gerenciar arquivos, o 'fs', que pode te ajudar nesse desafio. Está em **Node.js built-in modules**)
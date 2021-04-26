# SISTEMA BANCÁRIO

<<<<<<<<<<<<Estruturando DADOS do projeto>>>>>>>>>>>>
Ao criar conta...
Deve guardar: - Nome - CPF (id único: não deve haver mais de um usuári@ com o mesmo CPF) - Data de nascimento === idade > 18

         + uma propriedade com:
             - Saldo d@ usuári@ (início zerado)
             - Extrato (ARRAY das tranzações bancárias)
                 - Valor
                 - Data
                 - Descrição

> > > > FUNCIONALIDADES:

- Criar Conta - DEVE informar: NOME, CPF e DATA de NASCimento. E ser < 18.
- Pegar Saldo
  -Passando seu NOME e CPF, para adicionar saldo à conta.
- Adicionar Saldo - Passando NOME, CPF e VALOR desejado.
- Pagar Conta - Passando VALOR, DESCRIÇÃO e DATA de PAGamento - Caso NÃO informe a DATA, deve-se CONSIDERAR que o PAGAMENTO é para ser feito NO MESMO DIA. - NÃO PODE haver agendamento para uma data que já passaou - NÃO PODE pagar uma conta se o o saldo for insuficiente (saldo < que o valor da conta a ser paga)

- Transferência Interna - DEVE informar: NOME, CPF, NOME DO DESTINATÁRIO, CPF DO DESTINATÁRIO, VALOR - NÃO PODE haver agendamento de transferências - DEVE respeitar o SALDO do/a usuário/a remetente

> > > > REQUISITOS MÍNIMOS:

    - CRIAR conta
    - PAGAR contas
    - ADICIONAR VALIDAÇÃO de idade

> > > > ETAPAS DE DESENVOLVIMENTO:

1. CRIAR um **tipo** para representar uma CONTA para o usuário.

2. CRIAR um ARRAY GLOBAL que armazene USUÁRIOS na aplicação. Caso queira, pode iniciar este ARRAY com valores pré-definidos.

3. CRIAR mais um **tipo**: para representar as **transações** que serão salvas no EXTRATO.

4. Dentro da definição do usuário, CRIAR um ARRAY que armazene as transações de um CLIENTE.

5. CRIAR um ENDPOINT que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um ARRAY de USUÁRIOS. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.

6. CRIAR um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no ARRAY de USUÁRIOS.

7. ADICIONAR, uma VALIDAÇÃO no ITEM 1 (Criar conta): o usuário deve possuir MAIS do QUE 18 anos para conseguir se cadastrar. CASO NÃO possua, exiba uma mensagem de ERRO.

> > > > DESAFIOS:

1. ADICIONAR mais uma VALIDAÇÃO na função do ITEM 1 (Criar conta): VERIFICAR se o CPF passado já não está atrelado a alguma conta existente.

2. CRIAR um ENDPOINT `get` que RECEBA um CPF COMO PARÂMETRO e RETORNE o SALDO da conta do USUÁRIO DONO daquele CPF. A INFORMAÇÃO deve ser IGUAL ao que estiver salvo no SISTEMA. SE for DIFERENTE, exiba uma mensagem de ERRO.

3. CRIAR um ENDPOINT `put` que RECEBA um NOME, um CPF e um VALOR. Ele DEVE adicionar o valor ao saldo do usuário. O NOME e o CPF devem ser IGUAIS ao que estiver salvo no SISTEMA SE algum dos dados for DIFERENTE, exiba uma mensagem de ERRO.

4. ALTERAR o ENDPOINT de ADICIONAR SALDO para que ela adicione um item ao extrato da conta do usuário: INDICANDO o **valor** e a **data** da transação. A DESCRIÇÃO para este tipo de item deve ser SEMPRE A MESMA ("Depósito de dinheiro"). A data pode ser salva como timestamp ou string.

5. CRIAR um ENDPOINT `post` que PERMITA ao cliente PAGAR uma conta. Ela DEVE RECEBER uma **data** de vencimento da conta, uma **descrição**, um **valor** e o **CPF** do titular; e SALVAR uma transação no extrato da conta correspondente. O SALDO do usuário **não** DEVE ser atualizado neste momento. Caso nenhuma **data** seja passada, considere que o pagamento deve ser feito **hoje**.

6. CRIAR um novo ENDPOINT `put` responsável por ATUALOZAR o SALDO de um cliente. Para isto, PERCORRA os ITENS do extrato e ATUALIZE o SALDO somente para as contas cujas datas são anteriores a hoje.
7. ADICIONE uma VALIDAÇÃO ao ENDPOINT de PAGAR conta: o usuário NÃO PODE colocar uma data que já passou.

8. ADICIONE mais uma VALIDAÇÃO ao ENDPOINT de PAGAR conta: o usuário NÃO PODE tentar fazer um pagamento cujo valor seja maior do que seu saldo atual.

9. CRIAR um ENDPOINT `post` para PERMITIR a TRANSFERÊNCIA entre contas internas do banco. O usuário DEVE informar o seu **nome**, o seu **CPF**, o **nome** do destinatário, o **CPF** do destinatário e o **valor**. Para cada TRANSFERÊNCIA, criem um item do extrato para as duas contas envolvidas. Os saldos de ambas não devem ser atualizadas neste momento. (O ENDPOINT de atualizar saldo, que vocês implementaram, já deve fazer isso).

10. ADICIONE uma VALIDAÇÃO para o ENDPOINT de TRANSFERÊNCIA entre contas: VERIFICAR se o **saldo** do usuário é **suficiente** para a TRANSFERÊNCIA. SE NÃO for, exiba uma mensagem de ERRO.

11. ADICIONE mais uma VALIDAÇÃO para a FUNÇÃO de TRANSFERÊNCIA entre contas: VERIFICAR se ambas as contas (do **remetente** e **destinatário**) EXISTEm. Exibam uma mensagem de ERRO, SE NÃO EXISTIR.

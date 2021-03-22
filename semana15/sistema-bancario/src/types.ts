//3. CRIO mais um **tipo**: para representar as **transações** que serão salvas no EXTRATO.
export type Transaction ={
    value: number,
    date: Date,
    description: string
}

//1. CRIO um **tipo** para representar uma CONTA para o usuário.
export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    //4. Dentro da definição do usuário, CRIO um ARRAY que armazena as transações de um CLIENTE.
    statement: Array<Transaction> //tipando um Array com um tipo definido de seus elementos: Transaction
}
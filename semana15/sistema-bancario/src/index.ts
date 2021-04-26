import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { accounts } from "./accounts";

const app: Express = express()

app.use(express.json())
app.use(cors())

//5. CRIO um ENDPOINT que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um ARRAY de USUÁRIOS. Não é necessaío preocupar agora com as validações descritas nas funcionalidades.
app.post("/users/create", (req: Request, res: Response) => {
    try{
        const {name, CPF, dateOfBirthAsString} = req.body //desestruturando o body para pegar essas três chaves
        
        const [day, month, year] = dateOfBirthAsString.split("/") // [19, 03, 2021] o método split() divide uma string em uma lista ordenada de substrings, colocando-as em um array e retornando o array. Sua divisão/quebra é feita peocurando um padrão (/barrinhas/), o qual é fornecido como primeiro parâmtro na chamada do método. Ao mesmo tempo aqui há uma desestruturação por porsições ordenadas: 1º: dia, 2º: mês e 3º: ano. 

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`) //depois do split posso inserir a data no formato correto, usando templete string.


        // 1. validar as entradas da req
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime() 
        //a data de hoje (timestamp) eu posso acessar pelo new Date(), sem passar nenhum parâmetro, ele vai pegar a data da execução do código. E se passo o .getTime ->>> new.Date().getTime() <<<-, ele me passa o timestamp (marca temporal) desse momento agora. Ou acessando com o Date.now(), tbm retorna o mesmo. 
        //.now /.getTime, ele vai dar os dois timestamps. Aqui estou subtraindo as datas/timestamps, que são  em milisegundos, terei a idade também em miliseguntos. Então será convertida para anos com várias divisões sucessivas, na const a baixo.
        
        //passando a idade de milisseguntos para anos 
        //convertendo passo a passo, dividindo: para passar de milessegundos para segundos divide por 1000 | de segundos para minutos / por 60| de minutos para horas  / por 60 | de horas para dias / 24 | de dias para anos / 365.
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 34 / 365

        //agora com a idade em anos, posso validar
        //se a idade for menor que 18, jogo um erro.
        if (ageInYears < 18) {
            res.statusCode = 406
            //a requisição retorna um erro porque a idade deve ser maior que 18
            throw new Error("Age must be over 18 years old")
        }


        // 2. cconsultar/alterar a base de dados
        accounts.push({
            name, //quando a chave: name, é igual o valor: name chamado da const{} ali em cima, pode-se abreviar escrevendo uma só vez o parâmetro, em vez de name: name.
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        }) 
        // 3. validar os resultados da consulta, caso faça
            //essa não é necessário pois não foi feito consulta, apenas uma alteração, inserindo valores na base de dados. 

        // 4. enviar uma resposta
        res.status(201).send("Account created successfully!")
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

//6. CRIO um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no ARRAY de USUÁRIOS.
app.get("/users/all", (req: Request, res: Response) => {
    try { 
        //entradas para validar o resultado da consulta
        //se o array de contas tiver vazio, o accounts.lenght vai ser 0 e isso será convertido para false e a exclamação = não zero, será convertido pra true;
        if(!accounts.length){
            //se o array de contas tiver vazio troco o status da mensagem para 404 com uma propriedade da response = res.statusCode
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")

        }

        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})

//7. ADICIONO, uma VALIDAÇÃO no ITEM 1 (Criar conta): o usuário deve possuir MAIS do QUE 18 anos para conseguir se cadastrar. CASO NÃO possua, exiba uma mensagem de ERRO.

app.listen(3003, () => {
    console.log("Server running on port 3003")
}) 
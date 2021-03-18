//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
import { UserType, user as modUser, users } from "./info";
// import * from "./info.ts";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());
let err: number = 400;

//Exercício 1
//a) Método GET
//b) Pelo parâmetro path

app.get("/users/all", (req: Request, res: Response) => {
    try {
        res.status(201).send(users);
    } catch (erro) {
        res.status(400).send({ message: erro.message});
    }
});

//Exercicio 2

    app.get("/users", (req: Request, res: Response) => {
        try {
          const type = req.query.type as string;
          const filteredUsers = users.filter((user) => {
            return user.type === type;
          });
          if (type in UserType) {
            if (filteredUsers.length < 1) {
              err = 404;
              throw new Error("Users not found");
            }
            res.status(201).send(filteredUsers);
          } else {
            err = 400;
            throw new Error("Invalid Type");
          }
        } catch (error) {
          res.status(err).send({ message: error.message });
        }
      });

//a) passo os parâmetros através do req.query no endpoint -> http://localhost:3000/users?type=TIPO
//b) criando um if typo para o UserType



//Exercicio 3 



app.get("/users/:name", (req: Request, res: Response) => {
    const name = req.params.name as string;
    try {
        //aqui a função find procura um usuario apenas e guarda dentro da varivel, ao contrario do filtro que pega todos que correspondem ao que foi procurado
      const user = users.find((usr) => {
          // uso o LowerCase para que possa usar digitar sem se preocupar com ser minusculo ou maiusculo, ele pega a palavra do arrey e a que colocquei no endpoint e deixa tudo maiusculo para depois comparar ambos se é o mesmo nome
        return usr.name.toLocaleLowerCase() === name.toLocaleLowerCase();
      });
      if(!user){
          throw new Error("User not found")
      }
      res.status(201).send(user)
    } catch (error) {
      res.status(err).send({ message: error.message });
    }
  });
//a)
//b)

//Exercício 4

//metodo post para criar um novo item dentro da api (usuario), usei /users/create por fazer sentido aqui
app.post("/users/create", (req: Request, res: Response) => {
    try {
        //pego as infos do body que o usuario preencheu, crio novo usuaro e insiro no meu array de usuario
      const body = req.body;
      // se não houver o name, email, type e age digitado corretamente ele gera um erro. (Não deixei aberto o id para o usuario preencher pois quero unifica-lo dentro de uma regra minha e não quero que o usuario se envolva nisso, então euq uero garanti que ele seja um numero unico e nao ficar aberto para que o usuario mude seu valor, o id sera para meu controle interno)
      if (!body.name || !body.email || !body.type || !body.age) {
        err = 401;
        throw new Error("Missing parameters. Please check your informations");
      }
      //listando possiveis erros: o segundo erro aqui findNameLogin, que vai procurar no array se esse nome digitado já esta cadastrado e o findEmail fara o mesmo, procuranod o email.
      const findNameLogin = users.find(usr=>{return usr.name === body.name})
      const findEmail = users.find(usr=>{return usr.email === body.email})
      //se o gindNameLogin e o findEmail for encontrado, ele  gera um erro pois ja existe.. se não ele corre bem e cadastra
      if(findNameLogin){
          throw new Error("This user is already registered. Please choose another name")
      }
      if (findEmail) {
        throw new Error(
          "This e-mail is already registered. Please choose another e-mail"
        );
      }
      // se o type digitado pelo usuario for valido, ele cria um objeto com o novo usuario (newUser) com o mesmo padraõ do usuario que está no array (user) -> (modUser)
      if (body.type in UserType) {
        const newUser: modUser = {
            //o id(cpf) que o usuario nao digitou, eu criei aqui,e o newDate vai criar um numero que nao se repete nunca, e vai pegar exatamente a data (dia e horairo com miliseguntos), então nunca pegará um numero igual ao outro. Este id pode ser gerado de varias formas diferentes, aqui foi usado o > new Date() <.
          id: Number(new Date()),
          name: body.name,
          email: body.email,
          type: body.type,
          age: body.age,
        };
        //depois que cria o objeto, faço um push para inseri-lo na base de dados
        users.push(newUser);
        //por ultimo envio a resposta (res.satus) de sucesso ou erro (else) ao usuario
        res.status(201).send({ message: "Success!", newUser });
      } else {
        err = 401;
        throw new Error("Invalid type. Plese, check your informations");
      }
      //resposta de erro geral de acordo com o que tiver fazendo.
    } catch (error) {
      res.status(err).send({ message: error.message });
    }
  });

//a)
//b)
//Exerciio 5
app.put("/users/edit/:username", (req: Request, res: Response) => {
    try {
        const username = req.params.username as string
        const name = req.query.name as string
        const findName = users.find(usr=>{return usr.name.toLocaleLowerCase() === name.toLocaleLowerCase()})
        if(findName){
            throw new Error("This name exists already. Please, try another name")
        }
        const index = users.findIndex(usr=>{return usr.name.toLocaleLowerCase() === username.toLocaleLowerCase()})
        users[index].name = name+"-ALTERADO"
        res.status(201).send({message: "Success!", user: users[index]})
    } catch (error) {
      res.status(err).send({ message: error.message });
    }
  });


//Exercicio 6
//Exercicio 7

//
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
  app.listen(3000, () =>{
    console.log("Servidor está rodando no endereço http://localhost:3000")});
  
import express, {Request, Response} from "express";
import cors from "cors";
import {countries, country} from "./countries";

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint 01

app.get("/countries/all", (req: Request, res: Response) => {
    res.status(201).send(countries);
})

//Endpoint 03

// eu PUXO o app com o MÉTODO GET com o parâmetro ROTA e o CALLBACK (chamar de volta) de REQUISIÇÃO e RESPOSTA
app.get("/countries/search", (req: Request, res: Response) => {
    // eu CRIO uma LISTA ORIGINAL  do tipo [ARRAY] de objetos país. 
    let result: country[] = countries;

// eu tento 
try { 
    // SE eu NÃO tenho o parâmetro nome E o parâmetro capital E o parâmetro CONTINENTE 
    if (!req.query.name && !req.query.capital && !req.query.continent) {
        // eu JOGO um novo ERRO que é o "Parâmetro inválido"
        throw new Error("Parâmetro inválido");
    }
    // SE eu tenho o parâmetro nome
    if (req.query.name) { 
        // eu atribuo um FILTRO a minha lista original
        result = result.filter(
            // para cada país da minha lista eu retorno APENAS o país que tenha o nome INCLUSO no parâmetro, COMO string
           country => country.name.includes(req.query.name as string)
        )
     }
     
     if (req.query.capital) {
        result = result.filter(
           country => country.capital.includes(req.query.capital as string)
        )
     }
     
     if (req.query.continent) {
        result = result.filter(
           country => country.continent.includes(req.query.continent as string)
        )
     }
     //a lista mapeada RECEBE o valor da lista original e RETORNA cada país mapeado
     const listaFiltradaMapeada = result.map(
        (country) => {
            return country
        }
      )
      //eu RETORNO uma RESPOSTA com STATUS 200 (OK), e eu ENVIO a LISTA MAPEADA
     res.status(200).json({listaFiltradaMapeada});
     //eu PEGO um ERRO 
} catch (error) {
    // eu RETORNO uma RESPOSTA com STATUS 400 ('Não encontrado'), e ENVIO a MENSAGEM do ERRO.
    // res.status(400).send(error.message);
    res.status(400).send("Não encontrado")
}
})
//como eu chamo o endpoint no postman: 
//Exemplos:
//http://localhost:3003/countries/search?nome=Brasil
//http://localhost:3003/countries/search?capital=Argel
//http://localhost:3003/countries/search?continent=África


// Endpoint 02
app.get("/countries/:id", (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const country = countries.find((item) => {return item.id === id;});
    res.status(200).send(country);
});

//Endpoint 04

//priemerio eu armazendo o id e o body em algum lugar e depois vejo como substituir a informação no array original, 
//procuro o país naquele array, substituo e informo que foi sucesso.

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    // eu crio uma variavel cons id que busca no endpoint o parametro do id
    const id = Number(req.params.id);
    // eu tenho que salvar o body que esta armazendo no req.bory (req ou request é tudo que o usuario vai mandar para o backend, e o res ou response é o que o back deolve)
    const body = req.body;
    // crio uma variavel que vai armazenar o arrey que é uma const countries que nao pode ser mudado (const), para que seja variavel (let) a mudança
    let myCountries = countries;
    //crio um try e um catch (dentro do try coloco tudo que vai acontecer se der certo e no catch tudo que der errado)
    try {
        //primeiro verifico se o id usado no endpoint ta certo, usando isNan = is not a number, checando se o id é um numero ou nao
      if (isNaN(id)) {
          //se o id nao for um numero, ele vai criar/enviar uma mensgaem de erro, e se for numero esse segue o codigo
        throw new Error("Invalid id type. Please, send a number");
      }
      //seguindo o codigo, ele vai procurar dentro do array de países, se o id de algum pais será igual ao do endpoint, e o resultado da busca é armazendo em const index. Se ele achar, o index vai ser 0, 1, 2 e em diante, se nao, será -1.
      const index = countries.findIndex((item) => {
          //verifico se o id informado no endpoint é o mesmo do array original
        return item.id === id;
      });
      // se o index for menor que 0 ele vai dar uma mensagem de erro, se for maior, vai indicar que ele existe na lista e pode ser editado pois está dentro no array
      if (index < 0) {
        throw new Error("Country not found. Please, try another id");
      }
      //se achar o país, segue com o codigo, se nao achar o país, cria uma mensagem de erro.
      //se nao tiver nada no body, nem name nem capital, ele vai mostrar uma mensagem de erro. 
      if (!body.name && !body.capital) {
        throw new Error("Invalid parameters");
      }
        // se eu tenho um name dentro do body, ele vai substituir o name do arrey pelo do body
      if (body.name) {
          //temos o array myCountries, o index que estou procurando e o .name do país que eu quero alterar
        myCountries[index].name = body.name;
      }
      // se eu tenho uma capital dentro do body, ele vai substituir a capital do arrey pela do body
      if (body.capital) {
        //temos o array myCountries, o index que estou procurando e o .capital da capital que eu quero alterar
        myCountries[index].capital = body.capital;
      }
      //eu posso imprimir pra mostrar as informações do país que foi alterado
      console.log(myCountries[index]);
      //e mostro um status 200 informando que teve sucesso na alteração
      res.status(200).send({ country:myCountries[index], message: "The Country sucessfully updated!" });
    } catch (error) {
        // esse error.message vai pegar a meensagem de erro escrita ali a cima com o comando antes "throw new Error" que cria essa mensagem de erro.
      res.status(400).send({ message: error.message });
    }
  });

//
app.listen(3003, () =>{
    console.log("Servidor está rodando no endereço http://localhost:3003");
});
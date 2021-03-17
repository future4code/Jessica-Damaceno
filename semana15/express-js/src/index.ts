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
    let listaOriginal: country[] = countries;

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
        listaOriginal = listaOriginal.filter(
            // para cada país da minha lista eu retorno APENAS o país que tenha o nome INCLUSO no parâmetro, COMO string
           country => country.name.includes(req.query.name as string)
        )
     }
     //
     if (req.query.capital) {
        listaOriginal = listaOriginal.filter(
           country => country.capital.includes(req.query.capital as string)
        )
     }
     
     if (req.query.continent) {
        listaOriginal = listaOriginal.filter(
           country => country.continent.includes(req.query.continent as string)
        )
     }
     //a lista mapeada RECEBE o valor da lista original e RETORNA cada país mapeado
     const listaFiltradaMapeada = listaOriginal.map(
        (country) => {
            return country
        }
      )
      //eu RETORNO uma RESPOSTA com STATUS 200 (OK), e eu ENVIO a LISTA MAPEADA
     res.status(200).send(listaFiltradaMapeada);
     //eu PEGO um ERRO 
} catch (error) {
    // eu RETORNO uma RESPOSTA com STATUS 400 ('Não encontrado'), e ENVIO Xa MENSAGEM do ERRO.
    // res.status(400).send(error.message);
    res.status(400).send("Não encontrado")
}
})


// Endpoint 02
app.get("/countries/:id", (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const country = countries.find((item) => {return item.id === id;});
    res.status(200).send(country);
});

//Endpoint 04


//
app.listen(3003, () =>{
    console.log("Servidor está rodando no endereço http://localhost:3003");
});
// funções que possibilitam ir para as telas -> goTONomeDaTela
//para mudar de tela dar o history.push("com o link da tela, no caso da inicial é só a barra")
//como o histórico é da propria tela, é preciso receber ele como parâmetro da função goToNomeTela(history)

//VANTAGENS de deixar tudo junto/unificado neste mesmo arquivo:
//Não precisar escrever a url /NomeTela varias vezes, errar em algum local possivelmente.
//E caso desejar mudar a url/rota, é só mudar apenas aqui, envez de todo canto que usou a função.
//Ainda, fica mais fácil de ver/ter noção de quais telas conseguimos ir/chegar, tendo todas as funções organizadas aqui.

export const goToLoginScreen = (history) => {
  history.push("/login");
};

export const goToRegisterScreen = (history) => {
  history.push("/register");
};

export const goToAddPostScreen = (history) => {
  history.push("/add-feed");
};

export const goToPostDetailsScreen = (history, id) => {
  history.push(`/post-details/${id}`);
};

export const goToListPostsFeedScreen = (history) => {
  history.push("/");
};

export const goToErrorScreen = (history) => {
  history.push("/ErrorScreen");
};

export const goBack = (history) => {
  history.goBack();
};

//a função const goToNomeDaPag =() => {} serve para levar para a página específica.
//para isso (troca de página), deve usar o history.push("/nome-da-pagina")
//Aqui nesta tela, o history não está identificado, como no componente quando damos o useHistory, então é preciso passar o history.push como parametro da função criada goToNomeDaPag = (history) =>{} necessário para que saiba quem é o history identificando aí.

//na parte que precisa de um id, é necéssário passá-lo também como parâmetro da função,  assim como o history, exemplo da função const goToPostDetailsScreen = (history, id) => {}, pois só sabemos qual será esse id do post, ao clicar no post específico. Então recebemo esse id como variável, transformamos ele no history.push() em uma template string assim -> history.push(`/post-details/${id}`).

//Após exportar todas as funções/páginas aqui, é só importar onde quiser usá-las, qualquer arquivo, por exemplo em um butão. E qualquer botão que quiser apertar para redirecionar para tal página, é só chamar a função que está exportada aqui.
//Após isso, criar um componente buttom -> Criando então os botões de navegação num componente pra fazer as paginas funcionarem sem ter que ficar escrevendo direto na url.

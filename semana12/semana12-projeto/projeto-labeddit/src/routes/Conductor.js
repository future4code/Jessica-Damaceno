// funções que possibilitam ir para as telas -> goTONomeDaTela
//para mudar de tela dar o history.push("com o link da tela, no caso da nicial é só a barra")
//como o histórico é da propria tela, é preciso receber ele como parâmetro da função goToNomeTela(history)

//VANTAGENS de deixar tudo junto/unificado neste mesmo arquivo:
//Não precisar escrever a url /NomeTela varias vezes, errar em algum local possivelmente.
//E caso desejar mudar a url, é só mudar apenas aqui, emvez de todo canto que usou a função.
//Ainda, fica mais fácil de ver/ter noção de quais telas conseguimos ir/chegar, tendo todas as funções organizadas aqui.

export const goToLoginScreen = (history) => {
  history.push("/");
};

export const goToRegisterScreen = (history) => {
  history.push("/register");
};

export const goToFeedScreen = (history) => {
  history.push("/feed");
};

export const goToPostScreen = (history) => {
  history.push("/post");
};

export const goBack = (history) => {
  history.goBack();
};

//Após exportar todas as funções/páginas aqui, é só importar onde quiser usá-las.
//Após isso, criar um componente buttom -> Criando então os botões de navegação num componente pra fazer as paginas funcionarem sem ter que ficar escrevendo direto na url.

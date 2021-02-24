import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import AddPostScreen from "../screens/AddPostScreen/AddPostScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen/PostDetailsScreen";
import ListPostsFeedScreen from "../screens/ListPostsFeedScreen/ListPostsFeedScreen";
import ErrorScreen from "../screens/ErrorScreen/ErrorScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginScreen />
        </Route>

        <Route exact path={"/register"}>
          <RegisterScreen />
        </Route>

        <Route exact path={"/add-feed"}>
          <AddPostScreen />
        </Route>

        <Route exact path={"/post-details/:id"}>
          <PostDetailsScreen />
        </Route>

        <Route exact path={"/"}>
          <ListPostsFeedScreen />
        </Route>

        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

//<BeowserRouter> (passa as infos necessarias para seus filhos, tipo historico, parametros que pegamos da url, etc.)
//<witch> (permite que somente uma página seja renderizada por vez)
//exact path={""} (para indicar qual é o caminho da página, para onde quer ir)
//: (um jeito de criar uma variavel dentro do router => acrescenta : e escolhe o nome dela, que seria uma variavel com o id dela, para ir para a pagina especifica desse id, no caso de detalhe de um post específico por exemplo. Depois pega ela usando o user params)
//sobre a ordem das rotas, a regra é apenas de que a página de erro deve ser a última, pois ela só cairá nessa última página, caso nenhuma das páginas coincidirem com o endereço colocado pel@ 'cliente" final.

//Depois de finalizado o router, criar pagina coordinator/conductor etc para colocar as funções que vão para cada uma dessas páginas, unificadas em um único arquivo, que pode ser criado na mesma pasgina de routes, já que se trata de rotas ainda.

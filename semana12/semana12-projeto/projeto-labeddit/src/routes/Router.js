import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FeedScreen from "./screens/FeedScreen";
import PostScreen from "./screens/PostScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginScreen />
        </Route>

        <Route exact path={"/register"}>
          <RegisterScreen />
        </Route>

        <Route exact path={"/feed"}>
          <FeedScreen />
        </Route>

        <Route exact path={"/post"}>
          <PostScreen />
        </Route>

        <Route>
          <div>Error 404 - Desculpe, mas esta página não existe. :(</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

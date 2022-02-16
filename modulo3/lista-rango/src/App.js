import React from "react";
import { GlobalStyle } from "./constants/globalStyle";
import { Router } from "./Routes/router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

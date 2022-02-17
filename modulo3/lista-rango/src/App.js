import React from "react";
import { GlobalStyle } from "./Constants/globalStyle";
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

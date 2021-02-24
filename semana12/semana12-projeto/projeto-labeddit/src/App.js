import React from "react";
import { RegisterButton } from "./components/Button/RegisterButton";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <h3>Starting LabEddit...</h3>
      <Router />
      <RegisterButton color="blue">Login</RegisterButton>
      <RegisterButton color="rede">Register</RegisterButton>
      <RegisterButton color="yellow">Post</RegisterButton>
    </div>
  );
}

export default App;

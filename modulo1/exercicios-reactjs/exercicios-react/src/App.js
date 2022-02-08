

import React from "react";
import Footer from "./exercicio01/components/footer/Footer";
import Header from "./exercicio01/components/header/Header";
import MovieListScreen from "./exercicio01/components/home/MovieListScreen";
import "./styles.css";


export default function App() {
  
  return (
    <div>
      <div className="tela-inteira">
       <Header/>
       <MovieListScreen/>
       <Footer/>
      </div>
    </div>
  );
}


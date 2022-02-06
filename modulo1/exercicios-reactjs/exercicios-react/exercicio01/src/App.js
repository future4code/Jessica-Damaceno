

import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MovieListScreen from "./components/home/MovieListScreen";
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


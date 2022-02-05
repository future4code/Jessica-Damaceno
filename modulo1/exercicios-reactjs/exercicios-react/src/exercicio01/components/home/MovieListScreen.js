import React from "react";
import { MenuListItem } from "../menuListItem/MenuListItem";
import { CardVideo } from "../cardVideo/CardVideo";


const MovieListScreen = () => {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <div className="tela-inteira">
        <main>
          <nav className="menu-vertical">
            <ul>
                <MenuListItem botoesMeunuVertical={"Início"}/>
                <MenuListItem botoesMeunuVertical={"Em alta"}/>
                <MenuListItem botoesMeunuVertical={"Inscrições"}/>
                <hr/>
                <MenuListItem botoesMeunuVertical={"Originais"}/>
                <MenuListItem botoesMeunuVertical={"Histórico"}/>
             
            </ul>
          </nav>

          <section className="painel-de-videos">
              <CardVideo titulo={"titulo1"} imagem={"https://picsum.photos/400/400?a=1 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo2"} imagem={"https://picsum.photos/400/400?a=2 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo3"} imagem={"https://picsum.photos/400/400?a=3 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo4"} imagem={"https://picsum.photos/400/400?a=4 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo5"} imagem={"https://picsum.photos/400/400?a=5 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo6"} imagem={"https://picsum.photos/400/400?a=6 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo7"} imagem={"https://picsum.photos/400/400?a=7 "} video={reproduzVideo}/>
              
              <CardVideo titulo={"titulo8"} imagem={"https://picsum.photos/400/400?a=8 "} video={reproduzVideo}/>
              <CardVideo titulo={"titulo9"} imagem={"https://picsum.photos/400/400?a=9 "} video={reproduzVideo}/>
              <CardVideo titulo={"titulo10"} imagem={"https://picsum.photos/400/400?a=10 "} video={reproduzVideo}/>
              <CardVideo titulo={"titulo11"} imagem={"https://picsum.photos/400/400?a=11 "} video={reproduzVideo}/>
              <CardVideo titulo={"titulo12"} imagem={"https://picsum.photos/400/400?a=12 "} video={reproduzVideo}/>

           
          </section>
        </main>
      </div>
    </div>
  );
};

export default MovieListScreen;

import React from "react";

import {
  CharacterDetailPageContainer,
  Titulo,
  MainContent,
} from "./CharacterSTYLE";
import { useState, useEffect } from "react";
import { StarshipsCard } from "../../components/StarshipsCard/StarshipsCard";
import Loading from "../../components/Loading/Loading";
import { getStarshipsRender } from "../../services/getStarships"

export const CharacterDetailPage = () => {
  const [getStarships, setGetStarships] = useState([]);

  useEffect(() => {
    getStarshipsRender(setGetStarships)
  }, []); 

  return (
    <MainContent>
      <Titulo>Starships</Titulo>
      <CharacterDetailPageContainer>
        {getStarships.length > 0 ? getStarships.map((starships, index) => (
          <StarshipsCard key={index} starships={starships} image={"imagem"} />
          )) : <Loading/>}
      </CharacterDetailPageContainer>
    </MainContent>
  );
};

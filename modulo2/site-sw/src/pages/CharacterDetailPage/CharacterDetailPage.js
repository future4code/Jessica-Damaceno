import React from "react";

import {
  CharacterDetailPageContainer,
  Titulo,
  MainContent,
} from "./CharacterSTYLE";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { StarshipsCard } from "../../components/StarshipsCard/StarshipsCard";

export const CharacterDetailPage = () => {
  const [getStarships, setGetStarships] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/starships/`)
      .then(
        ({ data }) => setGetStarships(data.results)
        // console.log(data.results)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainContent>
      <Titulo>Starships</Titulo>
      <CharacterDetailPageContainer>
        {getStarships.map((starships, index) => (
          <StarshipsCard key={index} starships={starships} image={"imagem"} />
        ))}
      </CharacterDetailPageContainer>
    </MainContent>
  );
};

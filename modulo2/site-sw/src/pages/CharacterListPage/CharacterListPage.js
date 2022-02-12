import React from "react";
// import { useNavigate } from "react-router-dom";
import { CharacterListPageContainer, Titulo, MainContent } from "./ListSTYLE";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { PilotCard } from "../../components/PilotCard/PilotCard";
import Loading from "../../components/Loading/Loading";

export const CharacterListPage = () => {
  const [getCharactersList, setGetCharactersList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/people/`)
      .then(
        ({ data }) => setGetCharactersList(data.results)
        // console.log(data.results)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainContent>
      <Titulo>Pilots</Titulo>
      <CharacterListPageContainer>
      {/* {getCharactersList.length > 0 ? getCharactersList : <Loading />} */}
        {getCharactersList.map((character, index) => (
          <PilotCard key={index} name={character.name} image={"imagem"} />
        ))}
        {/* <Loading/> */}
      </CharacterListPageContainer>
    </MainContent>
  );
};

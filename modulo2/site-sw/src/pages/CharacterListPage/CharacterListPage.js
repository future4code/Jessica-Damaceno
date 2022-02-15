import React from "react";
// import { useNavigate } from "react-router-dom";
import { CharacterListPageContainer, Titulo, MainContent } from "./ListSTYLE";
import { useState, useEffect } from "react";
import { PilotCard } from "../../components/PilotCard/PilotCard";
import Loading from "../../components/Loading/Loading";
import { getPilotsRender } from "../../services/getPilots";


export const CharacterListPage = () => {
  
  const [getPilots, setGetPilots] = useState([]);

  useEffect(() => {
    getPilotsRender(setGetPilots)
  }, []);
  return (
    <MainContent>
      <Titulo>Pilots</Titulo>
      <CharacterListPageContainer>
        {getPilots.length > 0 ? getPilots.map((character, index) => (
          <PilotCard key={index} name={character.name} image={"imagem"}/>)) : <Loading />}
      </CharacterListPageContainer>
    </MainContent>
  );
};

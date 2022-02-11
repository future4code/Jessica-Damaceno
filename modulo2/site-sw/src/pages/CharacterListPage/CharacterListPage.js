import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterListPageContainer } from "./ListSTYLE";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { PilotCard } from "../../components/PilotCard/PilotCard";

export const CharacterListPage = () => {
  // const navigation = useNavigate();

  //   const [characterListPage, setCharacterListPage] = useState(["list"]);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/people/`)
      .then(
        ({ data }) => setCharacters(data.results)
        // console.log(data.results)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <CharacterListPageContainer>
      {/* <h1>Pilots</h1> */}

      {characters.map((character, index) => (
        <PilotCard key={index} name={character.name} image={"imagem"} />
      ))}
    </CharacterListPageContainer>
  );
};

// export const selectPage = () => {
//     return {

//     }
// }

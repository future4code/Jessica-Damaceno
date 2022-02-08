import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { CharacterListPageContainer, ActionButton } from "./ListSTYLE";

export const CharacterListPage = () => {
  const navigation = useNavigate();

  //   const [characterListPage, setCharacterListPage] = useState(["list"]);

  return (
    <CharacterListPageContainer>
        Página da lista de personagens
        <ActionButton onClick={() => navigation("/detalhes")}>
        Página de detalhes
        </ActionButton>
    </CharacterListPageContainer>
  );
};

// export const selectPage = () => {
//     return {

//     }
// }

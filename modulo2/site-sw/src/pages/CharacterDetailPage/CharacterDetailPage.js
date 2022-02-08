import React from "react";
import { CharacterDetailPageContainer, ActionButton } from "./CharacterSTYLE";
import { useNavigate } from "react-router-dom";

export const CharacterDetailPage = () => {
  const navigation = useNavigate();

  return (
    <CharacterDetailPageContainer>
      Página de detalhes
      <ActionButton onClick={() => navigation("/")}>
        Lísta de personagens
      </ActionButton>
    </CharacterDetailPageContainer>
  );
};

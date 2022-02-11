import React from "react";
import { HomePageContainer, ActionButton } from "./HomeSTYLE";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigation = useNavigate();

  return (
    <HomePageContainer>
      <ActionButton onClick={() => navigation("/personagens")}>
        Página de personagens
        </ActionButton>

        <ActionButton onClick={() => navigation("/detalhes")}>
        Página de detalhes
        </ActionButton>
    </HomePageContainer>
  );
};

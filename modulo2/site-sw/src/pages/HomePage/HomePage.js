import React from "react";
import { HomePageContainer, ActionButton } from "./HomeSTYLE";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigation = useNavigate();

  return (
    <HomePageContainer>
      <ActionButton onClick={() => navigation("/detalhes")}>
        Starships
      </ActionButton>

      <ActionButton onClick={() => navigation("/personagens")}>
        Pilots
      </ActionButton>
    </HomePageContainer>
  );
};

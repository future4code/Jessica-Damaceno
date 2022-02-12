import React from "react";
import { HomePageContainer, ActionButton } from "./HomeSTYLE";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'


export const HomePage = () => {
  const navigation = useNavigate();

  return (
    <HomePageContainer>
      <ActionButton onClick={() => navigation("/detalhes")}>
        Starships
        {/* {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Starships</>} */}
      </ActionButton>

      <ActionButton onClick={() => navigation("/personagens")}>
        Pilots
      </ActionButton>
    </HomePageContainer>
  );
};

import styled from "styled-components";

export const CharacterDetailPageContainer = styled.div`
  border: 1px;
  background-color: #eeeeee;

  margin: 20px auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  row-gap: 15px;
`;

export const Titulo = styled.h1`
  color: #000;
  text-align: center;
  font-size: 65px;
`;

export const MainContent = styled.div`
  background-color: #eeeeee;
  height: 980px;
`;

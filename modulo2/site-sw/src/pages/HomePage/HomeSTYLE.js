import styled from "styled-components";
import starWarsBackground from "../../assets/starWarsBackground.jpg";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 93vh;
  background-image: url(${starWarsBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ActionButton = styled.button`
  padding: 20px;
  width: 350px;
  height: 70px;
  font-size: 33px;
  border-radius: 15px;
  margin-left: 50px;
  border: none;
  font-weight: bold
`;

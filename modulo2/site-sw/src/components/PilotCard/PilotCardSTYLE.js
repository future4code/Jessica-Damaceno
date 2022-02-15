import styled from "styled-components";
// import starWars from "../../assets/starWars.jpg"

export const PilotCardContainer = styled.div`
  width: 300px;
  /* height: 200px; */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: end;
  p {
    margin: 0;
  }
`;

export const Name = styled.p`
  color: white;
  background-color: #1f2738;
  padding: 10px;
  text-align: center;
`;

export const Image = styled.img`
  border: 1px solid #1f2738;
`;

import styled from "styled-components";
// import starWars from "../../assets/starWars.jpg"

export const PilotCardContainer = styled.div`
  width: 150px;
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
`;

export const Image = styled.img`
border: 5px solid blue;
border-style: outset;

  /* background-position: cover ; */
`;

import styled from "styled-components";

export const StylizedRestaurantCard = styled.div`
  border: 1px solid black;
  /* width:: 30%; */
  margin: 0 auto;
  /* display: flex; */
  /* flex-wrap: wrap; */
    /* font-size: 1.5em; */
 
    @media(max-width: 1200px) {
        width: 35%;
    }
    @media(max-width: 300px) {
        width: 60;
    }
    
`;

export const RestaurantCard = ({ name, address }) => {
 
  return (
    <StylizedRestaurantCard>
      <p>{name}</p>
      <p>{address}</p>
    </StylizedRestaurantCard>
  );
};

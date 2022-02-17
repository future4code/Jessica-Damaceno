import styled from "styled-components";

export const StylizedRestaurantCard = styled.div`
  border: 1px solid black;
    /* font-size: 1.5em; */
`;

export const RestaurantCard = ({ name, address }) => {
 
  return (
    <StylizedRestaurantCard>
      <p>{name}</p>
      <p>{address}</p>
    </StylizedRestaurantCard>
  );
};

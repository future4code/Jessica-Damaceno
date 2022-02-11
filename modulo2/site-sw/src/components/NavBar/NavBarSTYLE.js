import styled from "styled-components";

export const NavBarStyle = styled.nav`
  background-color: #1f2738;
  height: 07vh;
  color: white;

  h1 {
    display: flex;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
  }

  ul {
    list-style: none;
    
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    li {
      display: inline-block;
      padding: 20px;
      margin: 5px;
      border: 1px solid;
      &:hover {
        cursor: pointer;
        background-color: LightSlateGray;
      }
    }
  }
`;

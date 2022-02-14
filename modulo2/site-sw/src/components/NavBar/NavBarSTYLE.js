import styled from "styled-components";

export const NavBarStyle = styled.nav`
  background-color: #1f2738;
  height: 07vh;
  color: white;

  h1 {
   
    margin: 15px;
    font-size: 33px;
  }

  ul {
    list-style: none;
    
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  
   
  }
`;

export const LiNotHighlighted = styled.li`
      display: inline-block;
      padding: 24px;
      border-left: 1px solid;
      height: 7vh;
      &:hover {
        cursor: pointer;
        background-color: LightSlateGray;
    }
`

export const LiWithProminence = styled.li`
      display: inline-block;
      padding: 24px;
      color: #F56F36;
      border-left: 1px solid;
      height: 7vh;
      &:hover {
        cursor: pointer;
        background-color: LightSlateGray;

        color: ;
  
    }
`
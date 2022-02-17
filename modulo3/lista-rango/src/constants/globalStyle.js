import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";
import { headerAndMoneyColor } from "./colors";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: "Montserrat", sans-serif;
}

header {
    background-color: ${headerAndMoneyColor};
  height: 62px;
}

`;

// export const Header = styled.header`
//   background-color: ${headerAndMoneyColor};
//   height: 62px;
// `;


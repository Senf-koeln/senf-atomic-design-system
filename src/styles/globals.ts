/** @format */

import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";
const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
  margin: 0;
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* box-sizing: content-box; */

}

*,
*::after,
*::before {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}


//ANIMATIONS

@keyframes opacityTranslateYFrom50Animation {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes opacityTranslateYFrom100Animation {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 0.1;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

`;

export default GlobalStyle;

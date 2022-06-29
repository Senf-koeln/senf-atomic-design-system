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
input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 0px solid transparent;
    /* -webkit-text-fill-color: inherit; */
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
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


  @keyframes translateYFrom100toMinus200pxAnimation {
  0% {
    /* transform: translateY(100%); */
    margin-top:100%;
  }

  100% {
    /* transform: translateY(calc((var(--vh, 1vh) * 100) - 200px)); */
    margin-top:0%;
  }
}

@keyframes translateYFrom100to70pxAnimation {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(70px);
  }
}

@keyframes translateYFrom100to30pxAnimation {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(30px);
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


@keyframes opacityAfter50PercentAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



@keyframes opacityAndPointerEventsAnimation {
  0% {
    pointer-events:none;
    opacity: 0;
  }
 
  100% {
    opacity: 1;
    pointer-events:all;
  }
}



`;

export default GlobalStyle;

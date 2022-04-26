/** @format */

import React from "react";
import styled from "styled-components";

const Component = styled.p`
  font-weight: 900;
  font-family: ${({theme}) => fontFamily || theme};


  ${
    let fontFamily;
    let fontWeight;
    let lineHeight;
    ({type}) => {
      switch (type) {
        case "h1":
          fontFamily =
          fontWeight = 
          lineHeight = 
          break;
      
        default:
          break;
      }
    }
  }
`;

export const Typography = ({ variant, color, children, ...props }) => {
  return (
    <Component as={variant} {...props}>
      {children}
    </Component>
  );
};
export default H1;

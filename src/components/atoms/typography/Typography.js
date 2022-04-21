/** @format */

import React from "react";
import styled from "styled-components";

const H1Text = styled.h1`
  font-weight: 900;
  font-family: ${(props) => props.fontFamily};
`;
export const H1 = ({ text }) => {
  return <H1Text fontFamily={props.theme.fontFamily}>{text}</H1Text>;
};
export default H1;

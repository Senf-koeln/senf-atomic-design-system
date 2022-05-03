/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { ExampleProps } from "./Example.types";

const StyledDiv = styled.div<ExampleProps>``;

const Example: FC<ExampleProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default Example;

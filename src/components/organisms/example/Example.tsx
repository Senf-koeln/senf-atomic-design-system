/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { ExampleProps } from "./Example.types";

const Wrapper = styled.div<ExampleProps>``;

const Example: FC<ExampleProps> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Example;

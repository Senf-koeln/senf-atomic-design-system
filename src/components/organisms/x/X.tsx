/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { XProps } from "./X.types";

const StyledDiv = styled.div<XProps>``;

const X: FC<XProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default X;

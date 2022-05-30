/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { MenuSidebarProps } from "./MenuSidebar.types";

const Wrapper = styled.div<MenuSidebarProps>`
  position: fixed;
  width: 200px;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  z-index: 2;
`;

const MenuSidebar: FC<MenuSidebarProps> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default MenuSidebar;

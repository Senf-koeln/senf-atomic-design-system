/** @format */

import React, { FC, useEffect, memo, useState, useRef } from "react";
import styled from "styled-components";

//Components
import { ContentDropdownProps } from "./ContentDropdown.types";
import TertiaryButton from "../buttons/TertiaryButton";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { LayerWhiteFirstDefault } from "../layerStyles/LayerStyles";
import Box from "../box/Box";

const Wrapper = styled.div`
  position: relative;
`;

const DropDownListContainer = styled.div`
  pointer-events: auto;
  display: block;
  box-sizing: border-box;
  z-index: 99;
  position: fixed;
  margin-top: -40px;
  width: auto;
  min-width: max-content;
  height: auto;
  padding: 6px;
  border-radius: 12px;

  transform: ${(props) =>
    props.direction === "downLeft"
      ? "translateY(45px) translateX(calc(-100% + 50px))"
      : "translateY(45px)"};

  ${(props) => LayerWhiteFirstDefault}
  box-shadow: ${({ theme }) => theme.shadows[0]}${({ theme }) =>
    theme.colors.greyscale.greyscale20tra};
  @media (min-width: 768px) {
  }
`;

const ContentDropdown: FC<ContentDropdownProps> = ({
  direction = "downRight",
  OpenButton,
  Content,
  openButtonWidth,
  open,
  setOpen,
}) => {
  const outerRef = useRef();

  useOnClickOutside(outerRef, () => setOpen(false));

  return (
    <Wrapper ref={outerRef}>
      <Box width={openButtonWidth}>{OpenButton}</Box>

      {open && (
        <DropDownListContainer direction={direction}>
          {Content}
        </DropDownListContainer>
      )}
    </Wrapper>
  );
};

export default ContentDropdown;

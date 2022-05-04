/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Typography from "../../atoms/typography/Typography";
import { SubNavbarProps } from "./SubNavbar.types";

const Wrapper = styled.div<SubNavbarProps>`
  width: 100%;
`;

const SubNavbar: FC<SubNavbarProps> = ({ header, rightFunction }) => {
  return (
    <Wrapper>
      <FlexWrapper
        alignItems="center"
        justifyContent="space-between"
        margin="12px 12px 10px 12px"
      >
        <TertiaryButton iconLeft="arrowDown" />
        <Typography variant="h3">{header}</Typography>
        {rightFunction ? <TertiaryButton text={rightFunction} /> : <div />}
      </FlexWrapper>
    </Wrapper>
  );
};

export default SubNavbar;

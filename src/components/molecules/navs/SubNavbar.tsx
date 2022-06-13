/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import Typography from "../../atoms/typography/Typography";
import { SubNavbarProps } from "./SubNavbar.types";

const Wrapper = styled.div<SubNavbarProps>`
  width: 100%;
  height: 50px;
  position: relative;
`;

const HandleBar = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary.primary120};
  border-radius: 1px;
`;

const LeftWrapper = styled.div<SubNavbarProps>`
  position: absolute;
  top: 8px;
  left: 12px;
  display: flex;
  height: 100%;
  align-items: center;
`;
const CenterWrapper = styled.div<SubNavbarProps>`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  height: 100%;
  align-items: center;
`;
const RightWrapper = styled.div<SubNavbarProps>`
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  height: 100%;
  align-items: center;
`;
const SubNavbar: FC<SubNavbarProps> = ({
  iconLeft,
  iconLeftTransform,
  textLeft,
  leftButtonClick,
  header,
  textRight,
  iconRight,
  iconRightTransform,
  handlebar,
}) => {
  return (
    <Wrapper>
      {handlebar && <HandleBar />}
      <LeftWrapper onClick={leftButtonClick}>
        <TertiaryButton
          iconLeft={iconLeft}
          iconLeftTransform={iconLeftTransform}
          text={textLeft}
        />
      </LeftWrapper>

      <CenterWrapper>
        <Typography variant="h3">{header}</Typography>
      </CenterWrapper>

      <RightWrapper>
        {textRight || iconRight ? (
          <TertiaryButton
            iconRight={iconRight}
            iconRightTransform={iconRightTransform}
            text={textRight}
          />
        ) : (
          <div />
        )}
      </RightWrapper>
    </Wrapper>
  );
};

export default SubNavbar;

/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Arrow from "../../../assets/icons/Arrow";
import More from "../../../assets/icons/More";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import Box from "../../atoms/box/Box";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Divider from "../../atoms/divider/Divider";
import { DetailSidebarProps } from "./DetailSidebar.types";

const Wrapper = styled.div<DetailSidebarProps>``;

const DetailSidebar: FC<DetailSidebarProps> = ({
  handleButtonClose,
  SecondButton,
  ThirdButton,
  sideDivider,
}) => {
  const isMobile = isMobileCustom();
  return (
    <Wrapper>
      <Box
        position="fixed"
        margin={isMobile ? "10px" : "20px"}
        width="36px"
        zIndex={9999}
        flexDirection={isMobile ? "row" : "column"}
        justifyContent={isMobile ? "space-between" : "flex-start"}
        gap="8px"
      >
        <RoundedButton
          icon={<Arrow transform="rotate(180deg)" />}
          onClick={handleButtonClose}
        />
        <Divider />
        {SecondButton}
        {ThirdButton}
      </Box>
      {sideDivider && !isMobile && (
        <Divider
          height="calc(100% - 40px)"
          width="2px"
          margin="20px 16px 20px 80px"
          position="fixed"
          zIndex={99}
        />
      )}
    </Wrapper>
  );
};

export default DetailSidebar;

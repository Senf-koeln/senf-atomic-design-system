/** @format */

import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { MainSwipeListTabsProps } from "./MainSwipeListTabs.types";

const Wrapper = styled.div<MainSwipeListTabsProps>`
  margin-top: ${({ isMobile }) => !isMobile && "8px"};
`;

const Tab = styled.div<MainSwipeListTabsProps>`
  cursor: pointer;
  margin: ${({ isMobile }) => (isMobile ? "10px" : "0px 10px 5px 10px")};
  color: ${({ active, theme }) =>
    active ? "black" : theme.colors.primary.primary160};

  &:hover {
    color: ${({ active }) => (active ? "black" : "#c79f00")};
  }
`;

const MainSwipeListTabs: FC<MainSwipeListTabsProps> = ({
  swipedUp,
  order,
  setOrder,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();
  return (
    <Wrapper isMobile={isMobile}>
      <Box
        margin={swipedUp ? "22px 14px 10px 14px" : "16px 14px 10px 14px"}
        flexDirection={isMobile ? "row" : "column"}
      >
        <Tab
          onClick={() => setOrder(1)}
          isMobile={isMobile}
          active={order === "ideas"}
        >
          <Typography
            variant="h3"
            // color={order === "ideas" ? "black" : "#d6ab00"}
            color="inherit"
            fontWeight={900}
            fontSize={isMobile ? "5.6vw" : "22px"}
          >
            {t("menuData_allIdeas")}
          </Typography>
        </Tab>
        <Tab
          onClick={() => setOrder(2)}
          isMobile={isMobile}
          active={order === "projectrooms"}
        >
          <Typography
            variant="h3"
            color="inherit"
            // color={order !== "ideas" ? "black" : "#d6ab00"}
            fontWeight={900}
            fontSize={isMobile ? "5.6vw" : "22px"}
          >
            {t("menuData_projectrooms")}
          </Typography>
        </Tab>
      </Box>
    </Wrapper>
  );
};

export default MainSwipeListTabs;

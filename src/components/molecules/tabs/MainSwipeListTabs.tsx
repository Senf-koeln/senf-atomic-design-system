/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { MainSwipeListTabsProps } from "./MainSwipeListTabs.types";

const Tab = styled.div<MainSwipeListTabsProps>`
  margin: 10px;
`;

const MainSwipeListTabs: FC<MainSwipeListTabsProps> = ({
  swipedUp,
  order,
  setOrder,
}) => {
  return (
    <Box margin={swipedUp ? "22px 14px 10px 14px" : "16px 14px 10px 14px"}>
      <Tab onClick={() => setOrder(1)}>
        <Typography
          variant="h3"
          color="black"
          fontWeight={900}
          fontSize="5.6vw"
        >
          Alle Ideen
        </Typography>
      </Tab>
      <Tab onClick={() => setOrder(2)}>
        <Typography
          variant="h3"
          color="#d6ab00"
          fontWeight={900}
          fontSize="5.6vw"
        >
          Projekträume
        </Typography>
      </Tab>
    </Box>
  );
};

export default MainSwipeListTabs;

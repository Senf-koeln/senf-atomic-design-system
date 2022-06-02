/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { MainSwipeListTabsProps } from "./MainSwipeListTabs.types";

const Wrapper = styled.div<MainSwipeListTabsProps>``;

const MainSwipeListTabs: FC<MainSwipeListTabsProps> = ({
  swipedUp,
  order,
  setOrder,
}) => {
  return (
    <Box margin={swipedUp ? "22px 14px 10px 14px" : "16px 14px 10px 14px"}>
      <Box onClick={() => setOrder(1)} margin="10px">
        <Typography
          variant="h3"
          color="black"
          fontWeight={900}
          fontSize="5.6vw"
        >
          Alle Ideen
        </Typography>
      </Box>
      <Box onClick={() => setOrder(2)} margin="10px">
        <Typography
          variant="h3"
          color="#d6ab00"
          fontWeight={900}
          fontSize="5.6vw"
        >
          Projekträume
        </Typography>
      </Box>
    </Box>
  );
};

export default MainSwipeListTabs;

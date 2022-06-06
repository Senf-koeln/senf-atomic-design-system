/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import Box from "../../atoms/box/Box";
import Divider from "../../atoms/divider/Divider";
import Icon from "../../atoms/icons/Icon";
import Typography from "../../atoms/typography/Typography";
import { TabsProps } from "./Tabs.types";

const Wrapper = styled.div<TabsProps>`
  margin-top: ${({ isMobile }) => !isMobile && "8px"};
`;

const Tab = styled.div<TabsProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: ${({ active, theme }) => (active ? 1 : 0.6)};

  &:hover {
    opacity: ${({ active }) => (active ? 1 : 0.8)};
  }
`;

const TabUnderline = styled.div<TabsProps>`
  height: 2px;
  width: calc(${({ tabs }) => (tabs.length ? `100% / ${tabs.length}` : 1)});
  transform: translateX(
    ${({ order }) => (order ? (order - 1) * 100 + "%" : "0%")}
  );

  background-color: black;

  margin-top: 10px;
  transition: 0.3s;
`;

const Tabs: FC<TabsProps> = ({ tabs }) => {
  // order, setOrder
  const [order, setOrder] = useState(0);
  const isMobile = isMobileCustom();
  return (
    <Wrapper isMobile={isMobile}>
      <Box gap="10px" justifyContent="space-around">
        {tabs.map((tab, index) => (
          <Tab
            onClick={() => setOrder(index + 1)}
            isMobile={isMobile}
            active={order === index + 1}
          >
            {tab.icon && <Icon icon={tab.icon} />}

            <Typography variant="buttonBg" color="inherit">
              {tab.text}
            </Typography>
          </Tab>
        ))}
      </Box>

      <TabUnderline tabs={tabs} order={order} />
      <Divider margin="-2px 0px" height="2px" />
    </Wrapper>
  );
};

export default Tabs;

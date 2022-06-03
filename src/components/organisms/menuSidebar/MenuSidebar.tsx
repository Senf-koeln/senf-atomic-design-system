/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Info from "../../../assets/icons/Info";
import Mail from "../../../assets/icons/Mail";
import More from "../../../assets/icons/More";
import User from "../../../assets/icons/User";
import Box from "../../atoms/box/Box";
import Button from "../../atoms/buttons/Button";
import Icon from "../../atoms/icons/Icon";
import {
  LayerWhiteFirstDefault,
  LayerWhiteSecondDefault,
} from "../../atoms/layerStyles/LayerStyles";
import { MenuSidebarProps } from "./MenuSidebar.types";

const Wrapper = styled.div<MenuSidebarProps>`
  position: fixed;
  width: 60px;
  height: calc(100vh - 20px);
  padding: 10px;
  margin: 10px;
  left: 0;
  top: 0;
  border-radius: 18px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  z-index: 2;

  ${(props) => LayerWhiteSecondDefault}
`;

// const ButtonPlacer = styled.div<OrganizationCardProps>`
//   box-sizing: border-box;
//   width: 50px;
//   height: 50px;
//   box-shadow: ${({ theme }) => theme.shadows[5]}
//       ${({ theme }) => theme.colors.brown.brown20tra},
//     ${({ theme }) => theme.shadows[3]}
//       ${({ theme }) => theme.colors.white.white20tra};
//   background-color: #faf8f3;
//   border-radius: 8px;
//   border: 2px solid rgba(255, 255, 255, 0.8);
//   position: absolute;
//   bottom: 0;
// `;

const MenuSidebar: FC<MenuSidebarProps> = ({
  handleOpenMyAccount,
  handleOpenInfoPage,
}) => {
  return (
    <Wrapper>
      <Box
        flexDirection="column"
        margin="10px 0px"
        justifyContent="space-between"
        height="calc(100% - 20px)"
      >
        <Box gap="14px" flexDirection="column">
          <Button variant="white" size="small" icon={<More />} />
          <Button
            variant="white"
            size="small"
            icon={<Info />}
            onClick={() => handleOpenInfoPage(true)}
          />
          <Button variant="white" size="small" icon={<More />} />
        </Box>
        <Box gap="14px" flexDirection="column">
          <Button
            variant="white"
            size="small"
            icon={<User />}
            onClick={() => {
              handleOpenMyAccount(true);
            }}
          />
        </Box>

        <Box gap="14px" flexDirection="column">
          <Button variant="white" size="small" icon={<Mail />} />
          <Button variant="white" size="small" icon={<More />} />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MenuSidebar;

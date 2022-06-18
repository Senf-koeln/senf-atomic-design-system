/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Info from "../../../assets/icons/Info";
import User from "../../../assets/icons/User";
import Box from "../../atoms/box/Box";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import { MobileTopBarProps } from "./MobileTopBar.types";

const Wrapper = styled.div<MobileTopBarProps>``;

const MobileTopBar: FC<MobileTopBarProps> = ({
  setOrder,
  setInfoPageOpen,
  handleOpenMyAccount,
}) => {
  return (
    <Wrapper>
      <Box
        position="fixed"
        margin={"10px"}
        width={"calc(100% - 20px)"}
        zIndex={9999}
        flexDirection="row"
        justifyContent="space-between"
        gap="8px"
      >
        <div />

        <Box gap="8px" flexDirection="row">
          <RoundedButton
            icon={<Info />}
            onClick={() => setInfoPageOpen(true)}
          />
          <RoundedButton
            icon={<User />}
            onClick={() => {
              handleOpenMyAccount(true);
            }}
          />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MobileTopBar;

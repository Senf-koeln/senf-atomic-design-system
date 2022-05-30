/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import Wave from "../../atoms/shapes/Wave";
import Modal from "../../molecules/modals/Modal";
import { AuthProps } from "./Auth.types";

import SenfManCelebrating from "../../../assets/illustrations/SenfManCelebrating.png";
import Typography from "../../atoms/typography/Typography";
import Box from "../../atoms/box/Box";
import Accordion from "../../molecules/accordion/Accordion";
import Success from "../../templates/success/Success";

import RoundedButton from "../../atoms/buttons/RoundedButton";
import Plus from "../../../assets/icons/Plus";
import { InlineWidget } from "react-calendly";
import Button from "../../atoms/buttons/Button";
import AuthOptions from "../../templates/auth/AuthOptions";

const Wrapper = styled.div<AuthProps>`
  height: 500px;
`;

const Img = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-80px, 0);
  top: 11px;
  width: 226px;
  z-index: 1;
  pointer-events: none;
  user-select: none;
`;

const Auth: FC<AuthProps> = ({}) => {
  const [order, setOrder] = useState(1);
  const setOpenModal = () => {};
  return (
    <Modal
      openModal={true}
      setOpenModal={setOpenModal}
      zIndex="999999999"
      backgroundColor="beige"
      size={order === 1 ? "s" : "xl"}
    >
      <Box margin="24px" position="absolute" zIndex={999}>
        <RoundedButton
          icon={<Plus transform="rotate(45deg)" />}
          onClick={() => setOrder(1)}
          variant={order === 1 ? "white" : "primary"}
        />
      </Box>

      <AuthOptions />
    </Modal>
  );
};

export default Auth;

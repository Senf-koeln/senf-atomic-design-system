/** @format */

import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { trapFocus } from "../../../hooks/trapFocus";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import SubNavbar from "../navs/SubNavbar";
import { ModalProps } from "./Modal.types";

const ModalContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  max-height: calc(100vh - 40px);
  overflow: scroll;

  ${(props) => LayerWhiteFirstDefault};
  border-radius: ${({ theme }) => theme.radii[4]}px;

  box-shadow: ${({ theme }) => theme.shadows[0]}
    ${({ theme }) => theme.colors.brown.brown20tra};
`;

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

const Modal = ({ openModal, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (openModal) {
      handleOpen();
    } else {
      handleClose();
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    const root = document.getElementById("root");
    root?.setAttribute("inert", "");
  };

  const handleClose = () => {
    setIsOpen(false);
    const root = document.getElementById("root");
    root?.removeAttribute("inert");
    // focus modal trigger again
    buttonRef?.current?.focus();
  };

  const submitRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (submitRef?.current) {
      submitRef?.current.focus();
    }
  }, []);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <React.Fragment>
        <ModalBackground />
        <ModalContentWrapper
          role="dialog"
          aria-labelledby="modal-header"
          onKeyDown={
            (e) =>
              submitRef?.current &&
              closeRef?.current &&
              trapFocus(e, submitRef.current, closeRef.current) // ideally we would use inert but it doesn't seem to be working
          }
        >
          <SubNavbar header="FAQ" />

          {children}
        </ModalContentWrapper>
      </React.Fragment>,
      document.body
    )
  );
};

export default Modal;

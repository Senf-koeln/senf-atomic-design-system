/** @format */

import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { trapFocus } from "../../../hooks/trapFocus";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import SubNavbar from "../navs/SubNavbar";
import { ModalProps } from "./Modal.types";

const Wrapper = styled.div<ModalProps>`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 9999)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: ${({ size }) =>
    size === "xl"
      ? "1200px"
      : size === "l"
      ? "800px"
      : size === "m"
      ? "600px"
      : "400px"};
  max-height: calc(100vh - 40px);
  overflow: ${({ overflow }) => (overflow ? overflow : "scroll")};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor === "primary"
      ? theme.colors.primary.primary100
      : backgroundColor === "beige"
      ? theme.colors.beige.beige20
      : "white"};
  border-radius: ${({ theme }) => theme.radii[4]}px;

  box-shadow: ${({ theme }) => theme.shadows[0]}
    ${({ theme }) => theme.colors.brown.brown20tra};
  transition: 0.2s;
`;

const Background = styled.div<ModalProps>`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 9998)};

  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

const Modal: FC<ModalProps> = ({
  openModal,
  setOpenModal,
  children,
  zIndex,
  size,
  backgroundColor,
  overflow,
  portalId = "portal-root-modal",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (openModal) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [openModal]);

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
    <React.Fragment>
      {isOpen &&
        ReactDOM.createPortal(
          <React.Fragment>
            <Background
              zIndex={zIndex - 1}
              onClick={() => setOpenModal(false)}
            />
            <Wrapper
              zIndex={zIndex}
              backgroundColor={backgroundColor}
              overflow={overflow}
              role="dialog"
              size={size}
              aria-labelledby="modal-header"
              onKeyDown={
                (e) =>
                  submitRef?.current &&
                  closeRef?.current &&
                  trapFocus(e, submitRef.current, closeRef.current) // ideally we would use inert but it doesn't seem to be working
              }
            >
              {children}
            </Wrapper>
          </React.Fragment>,
          document.body
          // document.getElementById(portalId) as HTMLElement
        )}
    </React.Fragment>
  );
};

export default Modal;

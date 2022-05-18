/** @format */

import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { trapFocus } from "../../../hooks/trapFocus";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import SubNavbar from "../navs/SubNavbar";
import { DialogProps } from "./Dialog.types";

const DialogWrapper = styled.div<DialogProps>`
  left: ${({ left }) => (left ? left : undefined)};
  right: ${({ right }) => (right ? right : undefined)};

  z-index: ${({ zIndex }) => (zIndex ? zIndex : 9999)};
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  max-width: ${({ size }) =>
    size === "xxl"
      ? "100vw"
      : size === "xl"
      ? "1200px"
      : size === "l"
      ? "800px"
      : size === "m"
      ? "600px"
      : "400px"};
  overflow: scroll;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};

  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : undefined)};

  animation: opacityTranslateYFrom100Animation 0.2s;
`;

const Dialog: FC<DialogProps> = ({
  left,
  right,
  boxShadow,
  openDialog,
  setOpenDialog,
  children,
  zIndex,
  size,
  backgroundColor,
  portalId = "portal-root-dialog",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (openDialog) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [openDialog]);

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
          <DialogWrapper
            left={left}
            right={right}
            zIndex={zIndex}
            boxShadow={boxShadow}
            backgroundColor={backgroundColor}
            role="dialog"
            size={size}
            aria-labelledby="dialog-header"
            onKeyDown={
              (e) =>
                submitRef?.current &&
                closeRef?.current &&
                trapFocus(e, submitRef.current, closeRef.current) // ideally we would use inert but it doesn't seem to be working
            }
          >
            {children}
          </DialogWrapper>,
          document.body
          // document.getElementById(portalId) as HTMLElement
        )}
    </React.Fragment>
  );
};

export default Dialog;

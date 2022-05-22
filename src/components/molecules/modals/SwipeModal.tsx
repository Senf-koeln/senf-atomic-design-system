/** @format */

import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { trapFocus } from "../../../hooks/trapFocus";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import SubNavbar from "../navs/SubNavbar";
import { SwipeModalProps } from "./SwipeModal.types";
import { animated } from "@react-spring/web";

const DragWrapper = styled(animated.div)`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 9999)};
  overscroll-behavior: contain;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  left: 0;

  overflow: ${({ overflow }) => (overflow ? overflow : "scroll")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  border-radius: ${({ theme }) => theme.radii[4]}px
    ${({ theme }) => theme.radii[4]}px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadows[0]}
    ${({ theme }) => theme.colors.brown.brown20tra};

  position: absolute;
  animation: organizationOverviewEnterAnimation 0.5s;
`;

const Background = styled.div<SwipeModalProps>`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 9998)};

  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

export const Header = styled(animated.div)`
  position: sticky;
  width: 100%;
  /* background-color: #fed957; */
  z-index: 25;
  height: ${({ headerComponentHeight }) =>
    headerComponentHeight ? headerComponentHeight : "100px"};
  background-color: ${({ headerComponentBackgroundColor }) =>
    headerComponentBackgroundColor
      ? headerComponentBackgroundColor
      : undefined};

  z-index: 99;
`;

const SwipeModal: FC<SwipeModalProps> = ({
  HeaderComponent,
  headerComponentHeight,
  headerComponentBackgroundColor,
  openModal,
  setOpenModal,
  children,
  zIndex,
  size,
  backgroundColor,
  overflow,
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

  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    transform: `translateY(${30}px)`,
    overflow: "hidden",
    touchAction: "none",
    userSelect: "none",
  }));

  const bind = useDrag(
    ({ last, down, movement: [, my], offset: [, y] }) => {
      if (last && my > 50) {
        set({
          transform: `translateY(${window.innerHeight}px)`,
          touchAction: "none",
        });

        setTimeout(() => {
          window.history.pushState(null, null, "/projectRooms");
          setIsOpen(false);
        }, 150);
        setTimeout(() => {
          set({
            transform: `translateY(${30}px)`,
            touchAction: "none",
          });
        }, 300);
      }
      console.log(my);

      set({ y: down ? my : 0 });
    },
    {
      pointer: { touch: true },
      bounds: {
        enabled: true,
      },
    }
  );

  const setClose = () => {
    set({
      transform: `translateY(${window.innerHeight}px)`,
      touchAction: "none",
    });
    setTimeout(() => {
      // window.history.pushState(null, null, "/projectRooms");
      setIsOpen(false);
    }, 150);
  };

  return (
    <React.Fragment>
      {isOpen &&
        ReactDOM.createPortal(
          <React.Fragment>
            <Background zIndex={zIndex - 1} onClick={setClose} />
            <DragWrapper
              style={props}
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
              <Header
                headerComponentHeight={headerComponentHeight}
                headerComponentBackgroundColor={headerComponentBackgroundColor}
                {...bind()}
              >
                {HeaderComponent}
              </Header>
              {children}
            </DragWrapper>
          </React.Fragment>,
          document.body
          // document.getElementById(portalId) as HTMLElement
        )}
    </React.Fragment>
  );
};

export default SwipeModal;

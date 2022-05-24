/** @format */
import { MainSwipeListProps } from "./MainSwipeList.types";

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
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import Typography from "../../atoms/typography/Typography";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import theme from "../../../styles/theme";
import Shape from "../../atoms/shapes/Shape";
import Wave from "../../atoms/shapes/Wave";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Toolbar from "../../toolbar/Toolbar";
import List from "../../molecules/list/List";
import Button from "../../atoms/buttons/Button";
import IdeaCard from "../../molecules/cards/IdeaCard";

const DragWrapper = styled(animated.div)`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 9999)};
  overscroll-behavior: contain;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  left: 0;

  overflow: ${({ overflow }) => (overflow ? overflow : "scroll")};
  background-color: ${({ backgroundBeige }) =>
    backgroundBeige
      ? theme.colors.primary.primary100
      : theme.colors.primary.primary100};
  border-radius: ${({ theme }) => theme.radii[4]}px
    ${({ theme }) => theme.radii[4]}px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadows[0]}
    ${({ theme }) => theme.colors.brown.brown20tra};

  position: absolute;
  animation: organizationOverviewEnterAnimation 0.5s;
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100% - 120px);
  width: 100%;
  margin-top: ${(props) => (props.isMobileCustom ? "-10px" : "0px")};
  overflow: scroll;
  z-index: 1;
  margin-left: 50%;
  padding-bottom: 200px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

const RoundedButtonWrapper = styled.div`
  position: absolute;
  top: ${({ swipedUp }) => (swipedUp ? "10px" : "-34px")};
  right: ${({ swipedUp }) => (swipedUp ? "10px" : "20px")};
  z-index: 299;
  transition: 0.5s;
  transform: ${({ swipedUp }) => (swipedUp ? "scale(0.8)" : "scale(1)")};
`;
export const Header = styled(animated.div)`
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: transparent;
  z-index: 25;
  z-index: 99;
  border-radius: ${({ theme }) => theme.radii[4]}px
    ${({ theme }) => theme.radii[4]}px 0px 0px;
  overflow: visible;
`;

const ToolbarWrapper = styled.div`
  margin-top: ${({ swipedUp }) => (swipedUp ? "16px" : "-36px")};
  transition: 0.5s;
  margin-left: 12px;
  width: calc(100% - 24px);
`;

const HandleBar = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary.primary120};
  border-radius: 1px;
`;

const Wrapper = styled.div<MainSwipeListProps>``;

const MainSwipeList: FC<MainSwipeListProps> = ({
  openModal,
  zIndex,
  backgroundColor,
  overflow,
  size,
  children,
  openScream,
  swipePosition,
  openOrganizationsPage,
  openInsightsPage,
  selectedTopics,
  data,
}) => {
  const [swipePercentage, setSwipePercentage] = useState(0);

  const [swipedUp, setSwipedUp] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [springProps, setSpring] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    transform: `translateY(${window.innerHeight - 160}px)`,
    overflow: "visible",
    touchAction: "none",
    userSelect: "none",
  }));

  const [listHeaderProps, setListHeaderProps] = useSpring(() => ({
    height: "70px",
  }));
  // const setSwipeUp = () => {
  //   // dispatch(setSwipePositionUp());
  //   setSpring({
  //     transform: `translateY(${30}px)`,
  //     touchAction: "unset",
  //   });
  //   setSlideUpSectionProps({
  //     height: "150px",
  //     overflow: "visible",
  //   });
  //   setListHeaderProps({
  //     height: "110px",
  //   });
  // };

  // const setSwipeDown = () => {
  //   // dispatch(setSwipePositionDown());
  //   setSpring({
  //     transform: `translateY(${window.innerHeight - 120}px)`,
  //     touchAction: "none",
  //   });
  //   setSlideUpSectionProps({
  //     height: "0px",
  //     overflow: "hidden",
  //   });
  //   setListHeaderProps({
  //     height: "60px",
  //   });
  //   setSearchOpen(false);
  // };

  // useEffect(() => {
  //   if (openScream) {
  //     setSpring({
  //       transform: `translateY(${window.innerHeight + 20}px)`,
  //       touchAction: "none",
  //     });
  //   } else {
  //     if (swipePosition === "bottom") {
  //       setSpring({
  //         transform: `translateY(${window.innerHeight - 120}px)`,
  //         touchAction: "none",
  //       });
  //     } else {
  //       setSpring({
  //         transform: `translateY(${30}px)`,
  //         touchAction: "unset",
  //       });
  //     }
  //   }
  // }, [openScream]);

  // useEffect(() => {
  //   if (isMobileCustom() && swipePosition === "bottom") {
  //     setSwipeDown();
  //   }
  //   if (isMobileCustom() && swipePosition === "top") {
  //     setSwipeUp();
  //   }
  // }, [swipePosition]);

  // useEffect(() => {
  //   if (searchOpen) {
  //     setSlideUpSectionProps({
  //       height: "210px",
  //     });
  //   }
  //   if (!searchOpen && (swipePosition !== "bottom" || !isMobileCustom)) {
  //     setSlideUpSectionProps({
  //       height: "150px",
  //     });
  //   }
  // }, [searchOpen]);

  // useEffect(() => {
  //   setSpring({
  //     transition: "0.5s",
  //   });
  // }, [openOrganizationsPage, openInsightsPage]);

  const bind = useDrag(
    ({ last, down, movement: [, my], offset: [, y] }) => {
      setSpring({
        transition: "0s",
      });
      if (last && my > 50) {
        setSpring({
          transform: `translateY(${window.innerHeight - 160}px)`,
          touchAction: "none",
        });
        setSwipedUp(false);

        // dispatch(setSwipePositionDown());

        // setListHeaderProps({
        //   height: "70px",
        // });
        setSearchOpen(false);
      }

      if (last && my < -50) {
        setSpring({
          transform: `translateY(${30}px)`,
          touchAction: "unset",
        });

        setSwipedUp(true);

        // dispatch(setSwipePositionUp());

        // setListHeaderProps({
        //   height: "150px",
        // });
      }

      setSwipePercentage(Math.abs(my) / (window.innerHeight - 190));

      if (!swipedUp && my < -2) {
        setListHeaderProps({
          height: down
            ? `${70 + 80 * swipePercentage}px`
            : last && my < -50
            ? "120px"
            : "70px",
        });
      }
      if (swipedUp && my > 2) {
        setListHeaderProps({
          height: down
            ? `${120 - 80 * swipePercentage}px`
            : last && my > 50
            ? "70px"
            : "120px",
        });
      }

      setSpring({ y: down ? my : 0 });
    },
    {
      pointer: { touch: true },
      bounds: {
        enabled: true,
      },
    }
  );

  return (
    <React.Fragment>
      <DragWrapper style={springProps}>
        <HandleBar />
        <Wave
          color={theme.colors.beige.beige20}
          top={swipedUp ? "0px" : "200px"}
          position="fixed"
        />
        <RoundedButtonWrapper swipedUp={swipedUp}>
          <RoundedButton
            size="big"
            icon="plus"
            color={theme.colors.primary.primary120}
          />
        </RoundedButtonWrapper>
        <Header {...bind()} swipedUp={swipedUp} style={listHeaderProps}>
          <FlexWrapper
            margin={swipedUp ? "32px 24px 20px 24px" : "26px 24px 20px 24px"}
            gap="20px"
          >
            <Typography variant="h3" style={{ fontWeight: 900 }}>
              Alle Ideen
            </Typography>
            <Typography variant="h3" color="#d6ab00">
              Projekträume
            </Typography>
          </FlexWrapper>

          <TagSlide type="topics" selectedTopics={selectedTopics} />
        </Header>

        <InnerWrapper isMobileCustom={isMobileCustom}>
          <ToolbarWrapper swipedUp={swipedUp}>
            <Toolbar />
          </ToolbarWrapper>
          <List CardType={IdeaCard} data={data} />
        </InnerWrapper>
      </DragWrapper>
    </React.Fragment>
  );
};

export default MainSwipeList;

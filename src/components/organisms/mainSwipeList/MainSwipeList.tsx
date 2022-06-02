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
import Box from "../../atoms/box/Box";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import theme from "../../../styles/theme";
import Shape from "../../atoms/shapes/Shape";
import Wave from "../../atoms/shapes/Wave";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Toolbar from "../../molecules/toolbar/Toolbar";
import List from "../../molecules/list/List";
import Button from "../../atoms/buttons/Button";
import IdeaCard from "../../molecules/cards/IdeaCard";
import { useTranslation } from "react-i18next";
import Plus from "../../../assets/icons/Plus";
import ProjectroomCard from "../../molecules/cards/ProjectroomCard";
import Stats from "../../../assets/icons/Stats";
import MainSwipeListTabs from "../../molecules/tabs/MainSwipeListTabs";

const DragWrapper = styled(animated.div)`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 995)};
  overscroll-behavior: contain;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  left: 0px;
  overflow: ${({ overflow }) => (overflow ? overflow : "scroll")};
  background-color: ${({ theme }) => theme.colors.primary.primary100};
  border-radius: ${({ theme }) => theme.radii[4]}px
    ${({ theme }) => theme.radii[4]}px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadows[0]}
    ${({ theme }) => theme.colors.brown.brown20tra};

  position: absolute;
  pointer-events: all;

  transform: ${(props) =>
    (props.$openOrganizationsOverview || props.$openStatistics) &&
    "scale(0.9) translateY(-20px)"};
  /* transform: scale(0.9) translateY(-20px); */
  @media (min-width: 768px) {
    width: 400px;
    max-width: 400px;
    border-radius: 18px;
    margin: 10px;
    height: calc(100vh - 20px);
    overflow: hidden;
  }
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100% - 120px);
  width: 100%;
  z-index: 1;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

const RoundedButtonWrapper = styled.div`
  position: absolute;
  top: ${({ swipedUp }) => (swipedUp ? "10px" : "-34px")};
  right: ${({ swipedUp }) => (swipedUp ? "10px" : "20px")};
  z-index: 299;
  transition: 0.5s;
  transform: ${({ swipedUp }) => (swipedUp ? "scale(0.8)" : "scale(1)")};

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
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
  margin-top: ${({ swipedUp }) => (swipedUp ? "16px" : "-46px")};
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

const TagSlideWrapper = styled.div<MainSwipeListProps>``;

const MainSwipeList: FC<MainSwipeListProps> = ({
  openModal,
  zIndex,
  backgroundColor,
  overflow,
  size,
  children,

  swipedUp,
  setSwipedUp,
  openScream,

  ideasData,
  projectRoomsData,
  organizations,

  order,
  setOrder,

  searchTerm,
  setSearchTerm,
  searchOpen,
  setSearchOpen,

  selectedTopics,
  selectedOrganizationTypes,
  handleSelectTopics,
  handleSelectOrganizationTypes,

  setOpenStatistics,
  openStatistics,
  setOpenOrganizationsOverview,
  openOrganizationsOverview,

  handleButtonOpenCard,
  handleButtonLike,
  handleButtonComment,
  user,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();
  const [swipePercentage, setSwipePercentage] = useState(0);

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
    height: isMobile ? "80px" : !isMobile && searchOpen ? "220px" : "170px",
    overflow: "hidden",
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

  useEffect(() => {
    if (openScream) {
      setSpring({
        transform: `translateY(${window.innerHeight + 20}px)`,
        touchAction: "none",
      });
    } else {
      if (!swipedUp) {
        setSpring({
          transform: `translateY(${window.innerHeight - 160}px)`,
          touchAction: "none",
        });
      } else {
        setSpring({
          transform: `translateY(${30}px)`,
          touchAction: "unset",
        });
      }
    }
  }, [openScream]);

  // useEffect(() => {
  //   if (isMobile && swipePosition === "bottom") {
  //     setSwipeDown();
  //   }
  //   if (isMobile && swipePosition === "top") {
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

  useEffect(() => {
    if (openStatistics || openOrganizationsOverview) {
      setSpring({
        transition: "0.5s",
        transform: "scale(0.9) translateY(-20px)",
      });
    } else {
      if (!swipedUp) {
        setSpring({
          transform: `translateY(${window.innerHeight - 160}px)`,
          touchAction: "none",
          transition: "0s",
        });
      } else {
        setSpring({
          transform: `translateY(${30}px)`,
          touchAction: "unset",
          transition: "0s",
        });
      }
    }
  }, [openStatistics, openOrganizationsOverview]);

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
        setListHeaderProps({
          overflow: "hidden",
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
        setListHeaderProps({
          overflow: "visible",
        });

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
            : "80px",
        });
      }
      if (swipedUp && my > 2) {
        setListHeaderProps({
          height: down
            ? `${120 - 80 * swipePercentage}px`
            : last && my > 50
            ? "80px"
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

  const toolbarComponent = (
    <ToolbarWrapper swipedUp={swipedUp || !isMobile}>
      <Toolbar
        setSearchOpen={setSearchOpen}
        searchOpen={searchOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        secondButton={
          <Button
            variant="secondary"
            size="small"
            text={order === "ideas" ? t("statistics") : t("organizations")}
            icon={order === "ideas" ? <Stats /> : null}
            onClick={
              order === "ideas"
                ? () => setOpenStatistics(true)
                : () => setOpenOrganizationsOverview(true)
            }
          />
        }
        searchPlaceholder={t("searchBar")}
        activeSortOptionLabel={t("newest_ideas")}
        sortOptions={[
          { name: "newest", label: t("newest_ideas") },
          { name: "hottest", label: t("hottest_ideas") },
        ]}
        statusOptions={[
          { name: "Unprocessed", label: t("unprocessed") },
          { name: "Accepted", label: t("accepted") },
          { name: "Planning", label: t("planning") },
          { name: "Implemented", label: t("implemented") },
          { name: "Rejected", label: t("rejected") },
        ]}
      />
    </ToolbarWrapper>
  );

  return (
    <React.Fragment>
      <DragWrapper
        style={isMobile ? springProps : null}
        $openOrganizationsOverview={openOrganizationsOverview}
        $openStatistics={openStatistics}
      >
        <Wave
          color={theme.colors.beige.beige20}
          top={swipedUp || !isMobile ? "0px" : "200px"}
          // position="fixed"
        />

        {isMobile && <HandleBar />}
        <RoundedButtonWrapper swipedUp={swipedUp}>
          <RoundedButton
            size="big"
            icon={
              <Plus
                color={theme.colors.primary.primary120}
                transform="scale(2)"
              />
            }
          />
        </RoundedButtonWrapper>
        <Header {...bind()} swipedUp={swipedUp} style={listHeaderProps}>
          <MainSwipeListTabs
            swipedUp={swipedUp}
            order={order}
            setOrder={setOrder}
          />
          {isMobile && (
            <TagSlideWrapper>
              <TagSlide
                type={order === "ideas" ? "topics" : "organizationTypes"}
                selectedTopics={selectedTopics}
                selectedOrganizationTypes={selectedOrganizationTypes}
                handleSelectTopics={handleSelectTopics}
                handleSelectOrganizationTypes={handleSelectOrganizationTypes}
              />
            </TagSlideWrapper>
          )}
          {!isMobile && toolbarComponent}
        </Header>

        <InnerWrapper isMobileCustom={isMobileCustom}>
          {isMobile && toolbarComponent}
          <List
            CardType={order === "ideas" ? IdeaCard : ProjectroomCard}
            data={order === "ideas" ? ideasData : projectRoomsData}
            organizations={organizations}
            handleButtonOpenCard={handleButtonOpenCard}
            handleButtonLike={handleButtonLike}
            handleButtonComment={handleButtonComment}
            user={user}
          />
        </InnerWrapper>
      </DragWrapper>
    </React.Fragment>
  );
};

export default MainSwipeList;

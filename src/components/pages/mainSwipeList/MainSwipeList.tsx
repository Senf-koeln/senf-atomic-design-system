/** @format */
import React, { FC, useEffect, useRef, useState, memo } from "react";

import { MainSwipeListProps } from "./MainSwipeList.types";

import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import styled from "styled-components";
import { animated } from "@react-spring/web";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import theme from "../../../styles/theme";
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
import MenuSidebar from "../../organisms/menuSidebar/MenuSidebar";
import Box from "../../atoms/box/Box";

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

  /* transform: scale(0.9) translateY(-20px); */
  @media (min-width: 768px) {
    width: 470px;
    max-width: 470px;
    border-radius: 18px;
    margin: 10px;
    height: calc(100vh - 20px);
    overflow: hidden;
  }
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  @media (min-width: 768px) {
    padding-left: 59px;
    height: 100%;

    position: absolute;
  }
`;

const ContentWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100vh - 160px);
  width: 100%;
  z-index: 1;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    height: calc(100% - 50px);
    width: 410px;
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
  overflow-y: hidden;
  z-index: 9;
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

const MainSwipeList: FC<MainSwipeListProps> = ({
  swipedUp,
  setSwipedUp,
  openScream,

  ideasData,
  projectroomsData,
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

  setOpenStatisticsOverview,
  openStatisticsOverview,
  setOpenOrganizationsOverview,
  openOrganizationsOverview,

  handleButtonOpenCard,
  handleOpenProjectroom,
  handleButtonLike,
  handleButtonComment,
  user,

  setPostIdeaOpen,

  handleOpenMyAccount,
  setInfoPageOpen,

  checkedSortOption,
  setCheckedSortOption,

  handleCreateProjectroom,
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
    height: isMobile ? "60px" : "160px",
  }));

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

  useEffect(() => {
    if (searchOpen) {
      setListHeaderProps({
        height: isMobile ? "130px" : "220px",
      });
    } else if (swipedUp && isMobile) {
      setListHeaderProps({
        height: "130px",
      });
    } else {
      setListHeaderProps({
        height: isMobile ? "60px" : "160px",
      });
    }
  }, [searchOpen]);

  // useEffect(() => {
  //   if (isMobile) {
  //     if (openStatistics || openOrganizationsOverview) {
  //       setSpring({
  //         transition: "0.5s",
  //         transform: "scale(0.9) translateY(-20px)",
  //       });
  //     }

  //     else {
  //       if (!swipedUp) {
  //         setSpring({
  //           transform: `scale(1) translateY(${window.innerHeight - 160}px)`,
  //           touchAction: "none",
  //           transition: "0s",
  //         });
  //       } else {
  //         setSpring({
  //           transform: `scale(1) translateY(${30}px)`,
  //           touchAction: "unset",
  //           transition: "0s",
  //         });
  //       }
  //     }
  //   }
  // }, [openStatistics, openOrganizationsOverview]);

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
        // setSearchOpen(false);
      }

      if (last && my < -50) {
        setSpring({
          transform: `translateY(${30}px)`,
          touchAction: "unset",
        });

        setSwipedUp(true);
      }

      setSwipePercentage(Math.abs(my) / (window.innerHeight - 190));

      if (!swipedUp && my < -2) {
        setListHeaderProps({
          height: down
            ? `${70 + 80 * swipePercentage}px`
            : last && my < -50
            ? "130px"
            : "60px",
        });
      }
      if (swipedUp && my > 2) {
        setListHeaderProps({
          height: down
            ? `${120 - 80 * swipePercentage}px`
            : last && my > 50
            ? "60px"
            : "130px",
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
                ? () => setOpenStatisticsOverview(true)
                : () => setOpenOrganizationsOverview(true)
            }
          />
        }
        searchPlaceholder={t("searchBar")}
        checkedSortOption={checkedSortOption}
        setCheckedSortOption={setCheckedSortOption}
        activeSortOptionLabel={
          order === "ideas" ? t("newest_ideas") : t("newest_projectrooms")
        }
        sortOptions={
          order === "ideas"
            ? [
                { value: "newest", label: t("newest_ideas") },
                { value: "hottest", label: t("hottest_ideas") },
              ]
            : [
                { value: "newest", label: t("newest_projectrooms") },
                { value: "aToZ", label: t("aToZ_projectrooms") },
                { value: "zToA", label: t("zToA_projectrooms") },
              ]
        }
        statusOptions={[
          { value: "Unprocessed", label: t("unprocessed") },
          { value: "Accepted", label: t("accepted") },
          { value: "Planning", label: t("planning") },
          { value: "Implemented", label: t("implemented") },
          { value: "Rejected", label: t("rejected") },
        ]}
      />
    </ToolbarWrapper>
  );

  return (
    <React.Fragment>
      <DragWrapper
        style={
          (openOrganizationsOverview || openStatisticsOverview) && isMobile
            ? {
                scale: 0.9,
                transform: `translateY(${-20}px)`,
                filter: "brightness(80%)",
                transition: "0.5s",
                overflow: "visible",
              }
            : isMobile
            ? springProps
            : null
        }
      >
        <Wave
          color={theme.colors.beige.beige20}
          top={swipedUp || !isMobile ? "0px" : "200px"}
        />
        {!isMobile && (
          <MenuSidebar
            handleOpenMyAccount={handleOpenMyAccount}
            setInfoPageOpen={setInfoPageOpen}
            setOrder={setOrder}
          />
        )}

        <InnerWrapper>
          <Header {...bind()} swipedUp={swipedUp} style={listHeaderProps}>
            {isMobile && <HandleBar />}

            <MainSwipeListTabs
              swipedUp={swipedUp}
              order={order}
              setOrder={setOrder}
            />
            <RoundedButtonWrapper swipedUp={swipedUp}>
              <RoundedButton
                size="big"
                icon={
                  <Plus
                    color={theme.colors.primary.primary120}
                    transform="scale(2)"
                  />
                }
                onClick={() => setPostIdeaOpen(true)}
              />
            </RoundedButtonWrapper>

            {isMobile && (
              <TagSlide
                type={order === "ideas" ? "topics" : "organizationTypes"}
                hide={!swipedUp}
                selectedTopics={selectedTopics}
                selectedOrganizationTypes={selectedOrganizationTypes}
                handleSelectTopics={handleSelectTopics}
                handleSelectOrganizationTypes={handleSelectOrganizationTypes}
              />
            )}
            {!isMobile && toolbarComponent}
          </Header>

          <ContentWrapper isMobileCustom={isMobileCustom}>
            {isMobile && toolbarComponent}

            {order !== "ideas" && (!isMobile || swipedUp) && (
              <Box margin="10px 16px 0px 16px">
                <Button
                  variant="secondary"
                  borderStyle="dashed"
                  size="small"
                  fillWidth="max"
                  onClick={handleCreateProjectroom}
                  text={t("createProjectRoom")}
                />
              </Box>
            )}

            <List
              CardType={order === "ideas" ? IdeaCard : ProjectroomCard}
              data={order === "ideas" ? ideasData : projectroomsData}
              organizations={organizations}
              ideasData={ideasData}
              projectroomsData={projectroomsData}
              handleButtonOpenCard={handleButtonOpenCard}
              handleOpenProjectroom={handleOpenProjectroom}
              handleButtonLike={handleButtonLike}
              handleButtonComment={handleButtonComment}
              user={user}
              listEndText={
                order === "ideas" && ideasData.length > 0
                  ? t("noMoreIdeas")
                  : order === "ideas" && ideasData.length < 1
                  ? t("noContentIdeas")
                  : t("noMoreProjectrooms")
              }
            />
          </ContentWrapper>
        </InnerWrapper>
      </DragWrapper>
    </React.Fragment>
  );
};

export default memo(MainSwipeList);

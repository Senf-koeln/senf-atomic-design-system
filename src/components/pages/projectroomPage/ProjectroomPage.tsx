/** @format */

import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import {
  LayerWhiteFirstDefault,
  LayerWhiteSecondDefault,
} from "../../atoms/layerStyles/LayerStyles";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { ProjectroomPageProps } from "./ProjectroomPage.types";
import { useTranslation } from "react-i18next";
import Input from "../../atoms/inputs/Input";
import List from "../../molecules/list/List";
import CommentCard from "../../molecules/cards/commentCard";
import Wave from "../../atoms/shapes/Wave";
import theme from "../../../styles/theme";
import Divider from "../../atoms/divider/Divider";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import DetailSidebar from "../../organisms/detailSidebar/DetailSidebar";
import ImagePlaceholder from "../../atoms/imagePlaceholder/ImagePlaceholder";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import Arrow from "../../../assets/icons/Arrow";
import Tabs from "../../molecules/tabs/Tabs";
import Bulb from "../../../assets/icons/Bulb";
import Info from "../../../assets/icons/Info";
import More from "../../../assets/icons/More";

import IdeaCard from "../../molecules/cards/IdeaCard";
import ContentDropdown from "../../atoms/contentDropdown/ContentDropdown";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Button from "../../atoms/buttons/Button";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Plus from "../../../assets/icons/Plus";
import setOrganizationTypeIcon from "../../../data/setOrganizationTypeIcon";
import Toolbar from "../../molecules/toolbar/Toolbar";
import { useIntersection } from "../../../hooks/useIntersection";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import Share from "../../../assets/icons/Share";
import SocialmediaShare from "../../organisms/socialmediaShare/SocialmediaShare";

import Calendar from "../../organisms/calendar/Calendar";
import Edit from "../../../assets/icons/Edit";

// const Calendar = React.lazy(() => import("../../organisms/calendar/Calendar"));

const DragWrapper = styled(animated.div)<ProjectroomPageProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  ${(props) => LayerWhiteSecondDefault}
  border-radius: 18px;
  height: calc(100vh - 20px);
  width: 100%;
  max-width: 470px;

  background-color: ${({ theme }) => theme.colors.primary.primary100};

  overscroll-behavior: contain;
  overflow-x: hidden;
  position: absolute;
  pointer-events: all;
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 96;
  top: 0;
  overflow: visible;
  overscroll-behavior: contain;
  animation: translateYFrom100to70pxAnimation 1s;

  @media (min-width: 768px) {
    width: 470px;
    max-width: 470px;
    border-radius: 18px;
    margin: 10px;
    height: calc(100vh - 20px);
    overflow: hidden;
    animation: none;
  }
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  @media (min-width: 768px) {
    padding: 0px 0px 0px 70px;
    height: 100%;
    width: 100%;
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

const ImageWrapper = styled.div`
  ${(props) => LayerWhiteFirstDefault}
  width:158px;
  height: 158px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoPlacer = styled.div`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  ${(props) => LayerWhiteSecondDefault}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWidget = styled.div`
  max-width: 100%;
  width: 352px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  height: ${(props) => (props.infoOpen ? "auto" : "90px")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${(props) => (props.infoOpen ? "block" : "-webkit-box")};
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const TagSlideWrapper = styled.div`
  position: sticky;
  top: -10px;

  .isSticky {
    position: fixed;
    top: 10px;
    z-index: 999999999;
  }
`;

const ProjectroomPage: FC<ProjectroomPageProps> = ({
  data,
  ideasData,
  organizations,

  user,
  handleButtonOpenCard,
  handleButtonClose,
  selectedTopics,
  handleSelectTopics,
  setPostIdeaOpen,

  setSearchOpen,
  searchOpen,
  searchTerm,
  setSearchTerm,
  handleEditProjectroom,
  path,
  handleShareIdeaVia,
  checkedSortOption,
  setCheckedSortOption,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();

  const {
    title,
    description_about,
    description_procedure,
    description_motivation,
    description_learnmore,
    screams,
    organizationId: cardOrganizationId,
    calendar,
  } = data;

  const [order, setOrder] = useState(1);
  const [infoOpen, setInfoOpen] = useState(false);
  const [editDropdownOpen, setEditDropdownOpen] = useState(false);
  const [socialmediaShareDropdownOpen, setSocialmediaShareDropdownOpen] =
    useState(false);

  const [swipedUp, setSwipedUp] = useState(true);

  const [swipePosition, setSwipePosition] = useState("top");
  const [tagSlideVisible, setTagSlideVisible] = useState(false);
  const catchRef = useRef();
  const ref = useRef();

  const scrollHandler = () => {
    const stickyElm = document.getElementById("tagSlideRef");

    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(stickyElm);

    if (ref.current.classList.contains("isSticky")) {
      setTagSlideVisible(true);
    } else {
      setTagSlideVisible(false);
    }
  };

  const [props, set] = useSpring(() => ({
    y: 0,
    transform: isMobile && `translateY(${70}px)`,
    touchAction: "none",
    userSelect: "none",
  }));

  const bind = useDrag(
    ({ last, down, movement: [mx, my] }) => {
      if (isMobile) {
        const el = document.getElementById("dragWrapper");

        if (last && my < -50 && swipePosition === "bottom") {
          set({
            transform: !down ? `translateY(${70}px)` : `translateY(${0}px)`,
            touchAction: "unset",
            userSelect: "all",
          });
          setSwipePosition("top");
          setSwipedUp(true);
        }
        if (last && my > 150 && swipePosition === "top") {
          set({
            transform: down
              ? `translateY(${0}px)`
              : `translateY(${window.innerHeight - 200}px)`,
            touchAction: "none",
            userSelect: "none",
          });
          setSwipePosition("bottom");
          setSwipedUp(false);
        }
        if (swipePosition !== "top") {
          set({ y: down ? my : 0, userSelect: "none" });
        }

        if (last && mx > 100) {
          handleButtonClose();
        }
      }
    },
    {
      pointer: { touch: true },
      bounds: {
        enabled: true,
        top: -window.innerHeight / 2,
        bottom: window.innerHeight - 120,
      },
    }
  );

  const [organizationCardData, setOrganizationCardData] = useState([]);

  useEffect(() => {
    if (organizations) {
      organizations.map(
        ({ organizationId, title, organizationType, logoURL, userIds }) => {
          if (cardOrganizationId === organizationId) {
            setOrganizationCardData([
              ...organizationCardData,
              title,
              organizationType,
              logoURL,
              userIds,
            ]);
          }
        }
      );
    }
  }, [organizations]);

  return (
    <React.Fragment>
      <DetailSidebar
        handleButtonClose={() => handleButtonClose(false)}
        sideDivider={true}
        SecondButton={
          <ContentDropdown
            open={socialmediaShareDropdownOpen}
            setOpen={setSocialmediaShareDropdownOpen}
            direction={isMobile ? "downLeft" : "downRight"}
            OpenButton={
              <RoundedButton
                variant="white"
                size="small"
                onClick={() =>
                  setSocialmediaShareDropdownOpen(!socialmediaShareDropdownOpen)
                }
                icon={<Share />}
              />
            }
            Content={
              <Box gap="5px" flexDirection="column">
                <SocialmediaShare
                  path={path}
                  handleShareIdeaVia={handleShareIdeaVia}
                />
              </Box>
            }
          />
        }
        ThirdButton={
          organizationCardData[3]?.includes(user?.userId) && (
            <ContentDropdown
              open={editDropdownOpen}
              setOpen={setEditDropdownOpen}
              direction={isMobile ? "downLeft" : "downRight"}
              OpenButton={
                <RoundedButton
                  variant="white"
                  size="small"
                  onClick={() => setEditDropdownOpen(!editDropdownOpen)}
                  icon={<More />}
                />
              }
              Content={
                <Box gap="5px" flexDirection="column">
                  <Button
                    variant={"secondary"}
                    size="small"
                    justifyContent="flex-start"
                    text={t("Projektraum bearbeiten")}
                    onClick={handleEditProjectroom}
                    icon={<Edit />}
                  />
                </Box>
              }
            />
          )
        }
      />
      <DragWrapper id="dragWrapper" style={props} isMobile={isMobile}>
        <Wave top="0px" color={theme.colors.beige.beige20} />

        <InnerWrapper>
          <Header
            {...bind()}
            swipedUp={swipedUp}
            // style={listHeaderProps}
            ref={catchRef}
          >
            {isMobile && <HandleBar />}

            <Box margin="21px 110px 0px 24px">
              <Typography
                variant="h3"
                fontWeight={900}
                fontSize={isMobile ? "5.6vw" : "22px"}
              >
                {title}
              </Typography>
            </Box>

            {tagSlideVisible ? (
              <TagSlide
                type={"topics"}
                selectedTopics={selectedTopics}
                handleSelectTopics={handleSelectTopics}
              />
            ) : (
              <Box margin="24px 24px 12px 24px" alignItems="center" gap="12px">
                <LogoPlacer>
                  <Icon
                    icon={setOrganizationTypeIcon(organizationCardData[1])}
                  />
                </LogoPlacer>
                <Typography variant="buttonBg">
                  {" "}
                  {organizationCardData[0]}
                </Typography>
              </Box>
            )}

            <RoundedButtonWrapper swipedUp={isMobile && swipedUp}>
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

            {/* {!isMobile && toolbarComponent} */}
          </Header>

          <ContentWrapper
            isMobileCustom={isMobileCustom}
            id="contentWrapper"
            onScroll={scrollHandler}
          >
            <Box margin="0px 0px 0px 18px">
              <TertiaryButton
                text={t("information")}
                iconRight={
                  <Arrow
                    transform={infoOpen ? "rotate(-90deg) " : "rotate(0deg) "}
                  />
                }
                onClick={() => setInfoOpen(!infoOpen)}
              />
            </Box>
            <Box margin="2px 24px 0px 24px">
              <InfoWidget
                onClick={() => setInfoOpen(!infoOpen)}
                infoOpen={infoOpen}
              >
                <Typography variant="bodyBg">
                  Es geht um {description_about} <br />
                  <br />
                  Mit den Ideen werden wir
                  {description_procedure} <br />
                  <br />
                  Unsere Motivation ist
                  {description_motivation} <br />
                  <br />
                  Wenn du mehr erfahren willst
                  {description_learnmore} <br />
                </Typography>
              </InfoWidget>
            </Box>

            <Divider margin="14px 24px 16px 24px" width="auto" />

            {calendar && (
              <Box margin="0px 24px 0px 24px" gap="10px">
                <Tabs
                  fontSize="buttonSm"
                  order={order}
                  setOrder={setOrder}
                  tabs={[
                    { icon: <Bulb />, text: "Ideen" },
                    { icon: <CalendarIcon />, text: "Kalender" },
                  ]}
                />
              </Box>
            )}
            {isMobile && (
              <TagSlideWrapper id="tagSlideRef" ref={ref}></TagSlideWrapper>
            )}

            {order === 1 ? (
              <React.Fragment>
                <Box margin="14px 24px 16px 24px">
                  <Toolbar
                    setSearchOpen={setSearchOpen}
                    searchOpen={searchOpen}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    searchPlaceholder={t("searchBar")}
                    activeSortOptionLabel={t("newest_ideas")}
                    checkedSortOption={checkedSortOption}
                    setCheckedSortOption={setCheckedSortOption}
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
                </Box>

                <List
                  CardType={IdeaCard}
                  data={ideasData}
                  handleButtonOpenCard={handleButtonOpenCard}
                  organizations={organizations}
                  listEndText={
                    ideasData?.length > 0
                      ? t("noMoreIdeas")
                      : ideasData?.length < 1 && t("noProjectIdeas")

                    // :t("noContentIdeas") //filter...
                  }
                />
              </React.Fragment>
            ) : (
              order === 2 && (
                <div style={{ margin: "10px 24px 20px 24px" }}>
                  <Calendar
                    inlineCalendarEntries={screams}
                    calendarType="inline"
                    handleButtonOpenCard={handleButtonOpenCard}
                  />
                </div>
              )
            )}
          </ContentWrapper>
        </InnerWrapper>
      </DragWrapper>
    </React.Fragment>
  );
};

export default ProjectroomPage;

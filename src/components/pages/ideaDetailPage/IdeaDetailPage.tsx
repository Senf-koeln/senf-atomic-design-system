/** @format */

import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import {
  LayerWhiteFirstDefault,
  LayerWhiteSecondDefault,
} from "../../atoms/layerStyles/LayerStyles";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { IdeaDetailPageProps } from "./IdeaDetailPage.types";
import { t } from "i18next";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import setColorByTopic from "../../../data/setColorByTopic";
import Dot from "../../../assets/icons/Dot";
import FlameInactive from "../../../assets/icons/FlameInactive";
import CommentInactive from "../../../assets/icons/CommentInactive";
import FlameActive from "../../../assets/icons/FlameActive";
import CommentActive from "../../../assets/icons/CommentActive";
import setOrganizationTypeIcon from "../../../data/setOrganizationTypeIcon";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Arrow from "../../../assets/icons/Arrow";
import { useTranslation } from "react-i18next";
import Input from "../../atoms/inputs/Input";
import List from "../../molecules/list/List";
import CommentCard from "../../molecules/cards/commentCard";
import Wave from "../../atoms/shapes/Wave";
import theme from "../../../styles/theme";
import More from "../../../assets/icons/More";
import Tabs from "../../molecules/tabs/Tabs";
import Stats from "../../../assets/icons/Stats";
import Info from "../../../assets/icons/Info";
import Bulb from "../../../assets/icons/Bulb";
import User from "../../../assets/icons/User";
import dayjs from "dayjs";
import Mail from "../../../assets/icons/Mail";
import Divider from "../../atoms/divider/Divider";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import DetailSidebar from "../../organisms/detailSidebar/DetailSidebar";
import Share from "../../../assets/icons/Share";
import Button from "../../atoms/buttons/Button";
import Hyperlink from "../../../assets/icons/Hyperlink";
import { openMail, openLink } from "../../../util/helpers";
import Calendar from "../../organisms/calendar/Calendar";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import Location from "../../../assets/icons/Location";
import ContentDropdown from "../../atoms/contentDropdown/ContentDropdown";
import SocialmediaShare from "../../organisms/socialmediaShare/SocialmediaShare";
import Edit from "../../../assets/icons/Edit";
import Delete from "../../../assets/icons/Delete";
import Report from "../../../assets/icons/Report";

const DragWrapper = styled(animated.div)<IdeaDetailPageProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  ${(props) => LayerWhiteSecondDefault}
  border-radius: 18px;
  height: calc(100vh - 20px);
  width: 100%;
  max-width: 470px;

  background-color: ${({ theme }) => theme.colors.beige.beige20};
  overflow: hidden;

  overscroll-behavior: contain;
  overflow-x: hidden;
  position: absolute;
  pointer-events: all;
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 96;
  top: 0;
  overflow: scroll;
  overscroll-behavior: contain;
  animation: translateYFrom100toMinus200pxAnimation 1s;

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
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  @media (min-width: 768px) {
    padding: 10px 10px 0px 70px;
    overflow-y: scroll;
  }
`;
const CardWrapper = styled.div<IdeaDetailPageProps>`
  float: left;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  border-radius: 18px;

  width: 100%;
  max-width: 400px;

  height: auto;
  flex: none;
  padding-bottom: ${({ projectroomCardData }) =>
    projectroomCardData ? "40px" : "0"};

  ${(props) => LayerWhiteFirstDefault}

  filter: ${(props) =>
    props.status === "deactivated" || props.status === "uncompleted"
      ? "brightness(0.6)"
      : "brightness(1)"};
  /* animation: opacityTranslateYFrom50Animation 0.8s; */
`;

const InnerCardWrapper = styled.div`
  margin: 12px 12px 12px 18px;
`;

const ProjectroomOpenButton = styled.button`
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  border: 0;
  bottom: 0;
`;
const IdeaDetailPage: FC<IdeaDetailPageProps> = ({
  loadingIdea,
  data,
  projectroomsData,
  handleButtonCloseCard,
  handleButtonLike,
  handleButtonComment,
  handleOpenProjectroom,
  handleEditIdea,
  handleDeleteIdea,
  handleReportIdea,
  user,
  handleOpenMenuComment,
  path,
  commentFormInput,
  setCommentFormInput,
  handleSubmitComment,
  commentFormLoading,
  handleShareIdeaVia,
}) => {
  const {
    screamId,
    title,
    body,
    Stadtteil,
    locationHeader,
    status,
    Thema,
    weblink,
    weblinkTitle,
    contact,
    contactTitle,
    likeCount,
    commentCount,
    projectRoomId: cardProjectroomId,
    selectedUnix,
    userHandle,
    userId,
    createdAt,
    comments,
  } = data;
  const { t } = useTranslation();
  const isMobile = isMobileCustom();

  const [socialmediaShareDropdownOpen, setSocialmediaShareDropdownOpen] =
    useState(false);

  const [editIdeaDropdownOpen, setEditIdeaDropdownOpen] = useState(false);

  const [swipePosition, setSwipePosition] = useState("bottom");

  const liked = () => {
    if (user?.likes && user?.likes.find((like) => like.screamId === screamId))
      return true;
    else return false;
  };

  const commented = () => {
    if (
      user?.comments &&
      user?.comments.find((comment) => comment.screamId === screamId)
    )
      return true;
    else return false;
  };

  const [projectroomCardData, setProjectroomCardData] = useState([]);

  useEffect(() => {
    if (projectroomsData && cardProjectroomId && !loadingIdea) {
      projectroomsData.map(({ projectRoomId, title, organizationType }) => {
        if (cardProjectroomId === projectRoomId) {

          setProjectroomCardData([
            ...projectroomCardData,
            title,
            organizationType,
          ]);
        }
      });
    }
  }, [projectroomsData, cardProjectroomId, loadingIdea]);

  let selectedDates = [];
  const selectedUnixArray = selectedUnix;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  if (selectedUnixArray !== undefined && selectedUnixArray !== null) {
    if (selectedUnixArray.length > 0) {
      selectedUnixArray.forEach((element) => {
        selectedDates.push(
          <div key={element * 1000}>
            {new Date(element * 1000).toLocaleTimeString("de-DE", options)}{" "}
            <br />{" "}
          </div>
        );
      });
    } else {
      selectedDates = (
        <div>
          {new Date(selectedUnix * 1000).toLocaleTimeString("de-DE", options)}{" "}
          <br />{" "}
        </div>
      );
    }
  }

  const [props, set] = useSpring(() => ({
    y: 0,
    transform: isMobile && `translateY(${window.innerHeight - 200}px)`,
    overflow: "hidden",
    touchAction: "none",
    userSelect: "none",
  }));

  const bind = useDrag(
    ({ last, down, movement: [mx, my] }) => {
      if (isMobile) {
        const el = document.getElementById("dragWrapper");

        if (last && my < -50) {
          set({
            transform: !down ? `translateY(${70}px)` : `translateY(${0}px)`,
            touchAction: "unset",
            overflow: "scroll",
            userSelect: "all",
          });
          setSwipePosition("top");
        }
        if (last && el.scrollTop < 30 && my > 150) {
          set({
            transform: down
              ? `translateY(${0}px)`
              : `translateY(${window.innerHeight - 200}px)`,
            touchAction: "none",
            overflow: "hidden",
            userSelect: "none",
          });
          setSwipePosition("bottom");
        }
        if (swipePosition !== "top") {
          set({ y: down ? my : 0, userSelect: "none" });
        }

        if (last && mx > 100) {
          handleButtonCloseCard();
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

  const handleShareIdea = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Senf.koeln – ${title}`,
          url: path,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      setSocialmediaShareDropdownOpen(!socialmediaShareDropdownOpen);
    }
  };

  return (
    <React.Fragment>
      <DetailSidebar
        handleButtonClose={() => handleButtonCloseCard(false)}
        SecondButton={
          <ContentDropdown
            open={socialmediaShareDropdownOpen}
            setOpen={setSocialmediaShareDropdownOpen}
            direction={isMobile ? "downLeft" : "downRight"}
            OpenButton={
              <RoundedButton
                variant="white"
                size="small"
                onClick={handleShareIdea}
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
          <ContentDropdown
            open={editIdeaDropdownOpen}
            setOpen={setEditIdeaDropdownOpen}
            direction={isMobile ? "downLeft" : "downRight"}
            OpenButton={
              <RoundedButton
                variant="white"
                size="small"
                onClick={() => setEditIdeaDropdownOpen(!editIdeaDropdownOpen)}
                icon={<More />}
              />
            }
            Content={
              <Box gap="5px" flexDirection="column">
                {user?.userId === userId || user?.isSuperAdmin === true ? (
                  <React.Fragment>
                    <Button
                      variant={"secondary"}
                      size="small"
                      text={t("idea.edit")}
                      justifyContent="flex-start"
                      onClick={() => handleEditIdea(screamId)}
                      icon={<Edit />}
                    />
                    <Button
                      variant={"secondary"}
                      size="small"
                      text={t("idea.delete")}
                      justifyContent="flex-start"
                      onClick={() => handleDeleteIdea(screamId)}
                      icon={<Delete />}
                    />
                  </React.Fragment>
                ) : (
                  <Button
                    variant={"secondary"}
                    size="small"
                    text={t("idea.report")}
                    justifyContent="flex-start"
                    onClick={() => handleReportIdea(screamId)}
                    icon={<Report />}
                  />
                )}
              </Box>
            }
          />
        }
      />
      <DragWrapper
        id="dragWrapper"
        style={props}
        {...bind()}
        loadingIdea={loadingIdea}
        isMobile={isMobile}
      >
        <div
          style={{
            position: "absolute",
            height: "200px",
            width: "100%",
            backgroundColor: isMobile ? "white" : "#fed957",
          }}
        />
        <Wave top="0px" color={theme.colors.beige.beige20} />

        <InnerWrapper>
          <CardWrapper
            status={status}
            projectroomCardData={projectroomCardData}
          >
            <InnerCardWrapper>
              <Box
                alignItems="center"
                flexDirection="row"
                gap="5px"
                margin="8px 0px 4px 0px"
              >
                <Icon icon={<Dot color={setColorByTopic(Thema)} />} />
                <Typography
                  variant="bodySm"
                  fontWeight={600}
                  color={setColorByTopic(Thema)}
                >
                  {Stadtteil}
                </Typography>
                <Box
                  alignItems="center"
                  justifyContent="flex-end"
                  flexDirection="row"
                  margin="0px 0px 0px auto"
                >
                  <TertiaryButton
                    variant="semibold"
                    iconLeft={liked() ? <FlameActive /> : <FlameInactive />}
                    text={likeCount}
                    onClick={(event) => handleButtonLike(event, screamId)}
                  />
                  <TertiaryButton
                    variant="semibold"
                    iconLeft={
                      commented() ? <CommentActive /> : <CommentInactive />
                    }
                    text={commentCount}
                    onClick={(event) => handleButtonComment(event, screamId)}
                  />
                </Box>
              </Box>

              <Typography variant="h3"> {title}</Typography>

              {/* <Box margin="10px 0px 20px 0px">
                <Tabs
                  fontSize="buttonSm"
                  order={0}
                  tabs={[
                    { icon: <Bulb />, text: "Beschreibung" },
                    { icon: <Info />, text: "Status" },
                    // { icon: <Stats />, text: "Statistiken" },
                  ]}
                />
              </Box> */}

              <Box alignItems="flex-start" flexDirection="row" margin="8px 0px">
                <Typography variant="bodyBg"> {body}</Typography>
              </Box>

              {weblink || contact ? (
                <Box gap="8px" flexWrap="wrap" margin="10px 0px 16px 0px">
                  <Button
                    variant="secondary"
                    icon={<Mail />}
                    text={contactTitle ? contactTitle : t("contact")}
                    size="small"
                    onClick={() => openMail(contact)}
                  />
                  <Button
                    variant="secondary"
                    icon={<Hyperlink />}
                    text={weblinkTitle ? weblinkTitle : t("website")}
                    size="small"
                    onClick={() => openLink(weblink)}
                  />
                </Box>
              ) : (
                <Divider margin="10px 0px 16px 0px" />
              )}

              <Box flexDirection="column" gap="5px">
                {selectedUnixArray !== undefined && selectedUnixArray !== null && (
                  <Box gap="5px">
                    <Icon icon={<CalendarIcon />} />
                    <Typography variant="buttonSm">{selectedDates}</Typography>
                  </Box>
                )}
                <Box gap="5px">
                  <Icon icon={<Location />} />{" "}
                  <Typography variant="buttonSm">{locationHeader}</Typography>
                </Box>

                <Box gap="5px">
                  <Icon icon={<User />} />{" "}
                  <Typography variant="buttonSm">{userHandle}</Typography>
                  <Typography
                    variant="buttonSm"
                    color={theme.colors.black.black40tra}
                  >
                    {t("at")}
                  </Typography>
                  <Typography
                    variant="buttonSm"
                    color={theme.colors.black.black40tra}
                  >
                    {dayjs(createdAt).format("DD.MM.YYYY")}
                  </Typography>
                </Box>
              </Box>
            </InnerCardWrapper>

            {projectroomCardData && (
              <ProjectroomOpenButton
                onClick={() => handleOpenProjectroom(cardProjectroomId)}
              >
                <Box
                  alignItems="center"
                  flexDirection="row"
                  gap="14px"
                  margin="0px 10px"
                >
                  <Icon
                    icon={setOrganizationTypeIcon(projectroomCardData[1])}
                  />
                  <Typography variant="bodySm">
                    {projectroomCardData[0]}
                  </Typography>
                </Box>
              </ProjectroomOpenButton>
            )}
          </CardWrapper>
          <Box
            margin="20px 10px"
            position="relative"
            flexDirection="column"
            gap="10px"
          >
            <Typography variant="h3">
              {t("IdeaDetailPage.commentHeadline")}
            </Typography>
            <Box gap="8px" width="100%">
              <Input
                placeholder={t("IdeaDetailPage.commentPlaceholder")}
                value={commentFormInput}
                onChange={(event) => setCommentFormInput(event.target.value)}
              />

              <Button
                text={t("send")}
                disabled={commentFormInput === "" || commentFormLoading}
                loading={commentFormLoading}
                onClick={handleSubmitComment}
              />
            </Box>
          </Box>
          {comments && (
            <List
              data={comments}
              CardType={CommentCard}
              listEndText={" "}
              handleOpenMenuComment={handleOpenMenuComment}
            />
          )}
        </InnerWrapper>
      </DragWrapper>
    </React.Fragment>
  );
};

export default IdeaDetailPage;

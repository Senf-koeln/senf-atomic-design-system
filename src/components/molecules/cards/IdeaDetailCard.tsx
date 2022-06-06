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
import { IdeaDetailCardProps } from "./IdeaDetailCard.types";
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
import List from "../list/List";
import CommentCard from "./commentCard";
import Wave from "../../atoms/shapes/Wave";
import theme from "../../../styles/theme";
import More from "../../../assets/icons/More";
import Tabs from "../tabs/Tabs";
import Stats from "../../../assets/icons/Stats";
import Info from "../../../assets/icons/Info";
import Bulb from "../../../assets/icons/Bulb";
import User from "../../../assets/icons/User";
import dayjs from "dayjs";
import Mail from "../../../assets/icons/Mail";

const Wrapper = styled.div<IdeaDetailCardProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  ${(props) => LayerWhiteSecondDefault}
  border-radius: 18px;
  height: calc(100vh - 20px);
  width: 100%;
  max-width: 470px;

  background-color: ${({ theme }) => theme.colors.primary.primary100};
  overflow: hidden;
`;
const InnerWrapper = styled.div`
  padding: 10px 10px 0px 70px;

  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow-y: scroll;
`;
const CardWrapper = styled.div<IdeaDetailCardProps>`
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
  overflow: hidden;

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
const IdeaDetailCard: FC<IdeaDetailCardProps> = ({
  data,
  projectroomsData,
  handleButtonCloseCard,
  handleButtonLike,
  handleButtonComment,
  user,
}) => {
  const {
    title,
    body,
    Stadtteil,
    locationHeader,
    status,
    Thema,
    likeCount,
    commentCount,
    organizationType,
    projectroomId: cardProjectroomId,
    thisOrganizationId,
    screamId,
    userHandle,
    createdAt,
    comments,
  } = data;
  const { t } = useTranslation();
  const [projectroomCardData, setProjectroomCardData] = useState(null);

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

  useEffect(() => {
    if (projectroomsData) {
      projectroomsData.map(({ projectroomId, title, organizationType }) => {
        if (cardProjectroomId === projectroomId) {
          setProjectroomCardData([
            ...projectroomCardData,
            title,
            organizationType,
          ]);
        }
      });
    }
  }, [projectroomsData]);

  return (
    <Wrapper>
      <Wave top="0px" color={theme.colors.beige.beige20} />
      <Box
        position="fixed"
        margin="10px"
        zIndex={2}
        flexDirection="column"
        gap="8px"
      >
        <RoundedButton
          icon={<Arrow transform="rotate(180deg)" />}
          onClick={() => handleButtonCloseCard(false)}
        />
        <RoundedButton
          icon={<More />}
          onClick={() => handleButtonCloseCard(false)}
        />
        <RoundedButton
          icon={<More />}
          onClick={() => handleButtonCloseCard(false)}
        />
      </Box>

      <InnerWrapper>
        <CardWrapper status={status} projectroomCardData={projectroomCardData}>
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

            <Box margin="10px 0px 20px 0px">
              <Tabs
                fontSize="buttonSm"
                order={0}
                tabs={[
                  { icon: <Bulb />, text: "Beschreibung" },
                  { icon: <Info />, text: "Status" },
                  { icon: <Stats />, text: "Statistiken" },
                ]}
              />
            </Box>

            <Box
              alignItems="flex-start"
              flexDirection="row"
              margin="8px 0px 8px 0px"
            >
              <Typography variant="bodyBg"> {body}</Typography>
            </Box>
            <Box flexDirection="column" gap="5px">
              <Box gap="5px">
                <Icon icon={<Mail />} />{" "}
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
            <ProjectroomOpenButton>
              <Box
                alignItems="center"
                flexDirection="row"
                gap="14px"
                margin="0px 10px"
              >
                <Icon icon={setOrganizationTypeIcon(projectroomCardData[1])} />
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
            {t("ideaDetailCard.commentHeadline")}
          </Typography>
          <Input placeholder={t("ideaDetailCard.commentPlaceholder")} />
        </Box>
        <List data={comments} CardType={CommentCard} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default IdeaDetailCard;

/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { IdeaCardProps } from "./IdeaCard.types";
import { t } from "i18next";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import setColorByTopic from "../../../data/setColorByTopic";
import Dot from "../../../assets/icons/Dot";
import FlameInactive from "../../../assets/icons/FlameInactive";
import CommentInactive from "../../../assets/icons/CommentInactive";
import FlameActive from "../../../assets/icons/FlameActive";
import CommentActive from "../../../assets/icons/CommentActive";
import setOrganizationTypeIcon from "../../../data/setOrganizationTypeIcon";

const Wrapper = styled.div<IdeaCardProps>`
  float: left;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  border-radius: 18px;

  width: 100%;

  height: auto;
  padding-bottom: ${(props) => (props.projectroomName ? "40px" : "0")};
  overflow: hidden;

  ${(props) => LayerWhiteFirstDefault}

  filter: ${(props) =>
    props.status === "deactivated" || props.status === "uncompleted"
      ? "brightness(0.6)"
      : "brightness(1)"};
  animation: opacityTranslateYFrom50Animation 0.8s;
`;

const InnerWrapper = styled.div`
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
const IdeaCard: FC<IdeaCardProps> = ({
  data,
  handleButtonOpenCard,
  handleButtonLike,
  handleButtonComment,
  user,
}) => {
  const {
    title,
    body,
    Stadtteil,
    status,
    Thema,
    likeCount,
    commentCount,
    organizationType,
    projectroomName,
    thisOrganizationId,
    screamId,
  } = data;

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

  return (
    <Wrapper
      status={status}
      projectroomName={projectroomName}
      onClick={(event) => handleButtonOpenCard(event, screamId)}
    >
      <InnerWrapper>
        <Box
          alignItems="center"
          flexDirection="row"
          gap="5px"
          margin="10px 0px 12px 0px"
        >
          <Icon icon={<Dot color={setColorByTopic(Thema)} />} />
          <Typography variant="bodySm" color={setColorByTopic(Thema)}>
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
              iconLeft={commented() ? <CommentActive /> : <CommentInactive />}
              text={commentCount}
              onClick={(event) => handleButtonComment(event, screamId)}
            />
          </Box>
        </Box>

        <Typography variant="h3"> {title}</Typography>

        <Box
          alignItems="flex-start"
          flexDirection="row"
          gap="16px"
          margin="10px 0px 12px 0px"
        >
          <Typography variant="bodyBg"> {body}</Typography>
        </Box>
      </InnerWrapper>

      {projectroomName && (
        <ProjectroomOpenButton>
          <Box
            alignItems="center"
            flexDirection="row"
            gap="14px"
            margin="0px 10px"
          >
            <Icon
              icon={setOrganizationTypeIcon(organizationType)}
              // transform="scale(0.8)"
            />
            <Typography variant="bodySm">{projectroomName}</Typography>
          </Box>
        </ProjectroomOpenButton>
      )}
    </Wrapper>
  );
};

export default IdeaCard;

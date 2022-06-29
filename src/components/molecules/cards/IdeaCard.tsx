/** @format */

import React, { FC, useEffect, useState } from "react";
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
  cursor: pointer;
  float: left;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  border-radius: 18px;

  height: auto;
  padding-bottom: ${({ projectroomCardData }) =>
    projectroomCardData ? "40px" : "0"};
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;

  ${(props) => LayerWhiteFirstDefault}

  animation: opacityTranslateYFrom50Animation 0.8s;

  p {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ projectroomCardData }) =>
      projectroomCardData ? 3 : 4};
    line-clamp: ${({ projectroomCardData }) => (projectroomCardData ? 3 : 4)};
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    transition: 0.3s;

    &:hover {
      transform: scale(103%);
      background-color: #fefefd;
    }
  }
`;

const InnerWrapper = styled.div`
  margin: 12px 12px 12px 18px;
`;

const ProjectroomOpenButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  border: 0;
  bottom: 0;
`;
const IdeaCard: FC<IdeaCardProps> = ({
  data,
  projectroomsData,
  handleButtonOpenCard,
  handleOpenProjectroom,
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
    projectRoomId: cardProjectRoomId,
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

  const [projectroomCardData, setProjectroomCardData] = useState([]);

  useEffect(() => {
    if (projectroomsData) {
      projectroomsData.map(({ projectRoomId, title, organizationType }) => {
        if (cardProjectRoomId === projectRoomId) {
          setProjectroomCardData([
            ...projectroomCardData,
            title,
            organizationType,
            projectRoomId,
          ]);
        }
      });
    }
  }, [projectroomsData]);

  return (
    data && (
      <Wrapper
        status={status}
        projectroomCardData={projectroomCardData.length > 0}
        onClick={(event) => handleButtonOpenCard(event, "ideaCard", screamId)}
      >
        <InnerWrapper>
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
            margin="8px 0px 8px 0px"
          >
            <Typography variant="bodyBg"> {body}</Typography>
          </Box>
        </InnerWrapper>

        {projectroomCardData.length > 0 && (
          <ProjectroomOpenButton
            onClick={(event) =>
              handleOpenProjectroom(
                event,
                cardProjectRoomId,
                data?.projectRoomId,
                projectroomCardData[2]
              )
            }
          >
            <Box
              alignItems="center"
              flexDirection="row"
              gap="14px"
              margin="0px 10px"
            >
              <Icon icon={setOrganizationTypeIcon(projectroomCardData[1])} />
              <Typography variant="bodySm">{projectroomCardData[0]}</Typography>
            </Box>
          </ProjectroomOpenButton>
        )}
      </Wrapper>
    )
  );
};

export default IdeaCard;

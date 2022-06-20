/** @format */

import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { ProjectroomCardProps } from "./ProjectroomCard.types";
import { t } from "i18next";
import ImagePlaceholder from "../../atoms/imagePlaceholder/ImagePlaceholder";
import Bulb from "../../../assets/icons/Bulb";
import setOrganizationTypeIcon from "../../../data/setOrganizationTypeIcon";

const Wrapper = styled.div<ProjectroomCardProps>`
  cursor: pointer;
  float: left;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: auto;
  border-radius: 18px;

  height: auto;
  overflow: hidden;

  ${(props) => LayerWhiteFirstDefault}

  filter: ${(props) =>
    props.status === "deactivated" || props.status === "uncompleted"
      ? "brightness(0.6)"
      : "brightness(1)"};
  animation: opacityTranslateYFrom50Animation 0.8s;

  @media (min-width: 768px) {
    transition: 0.3s;

    &:hover {
      transform: scale(103%);
      background-color: #fefefd;
    }
  }
`;

const InnerWrapper = styled.div`
  margin: 12px 18px;
`;

const LogoPlacer = styled.div`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  box-shadow: ${({ theme }) => theme.shadows[5]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[3]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: #faf8f3;
  overflow: visible;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.8);
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const DeactivatedWrapper = styled.div`
  position: absolute;
  top: 40px;
  z-index: 5;
  color: white;
  width: 50%;
  margin-left: 25%;
`;

const ProjectroomCard: FC<ProjectroomCardProps> = ({
  data,
  ideasData,
  handleButtonOpenCard,
  organizations,
}) => {
  const {
    projectRoomId: cardProjectRoomId,
    title,
    brief,
    logoURL,
    status,
    active,
    organizationId: cardOrganizationId,
  } = data;

  const [organizationCardData, setOrganizationCardData] = useState([]);

  useEffect(() => {
    if (organizations) {
      organizations.map(
        ({ organizationId, title, organizationType, logoURL }) => {
          if (cardOrganizationId === organizationId) {
            setOrganizationCardData([
              ...organizationCardData,
              title,
              organizationType,
              logoURL,
            ]);
          }
        }
      );
    }
  }, [organizations]);

  const ideasSize = ideasData?.filter(
    ({ projectRoomId }) => projectRoomId === cardProjectRoomId
  ).length;

  return (
    <Wrapper
      status={status}
      onClick={(event) =>
        handleButtonOpenCard(event, "projectroomCard", cardProjectRoomId)
      }
      // active={thisOrganizationId === organization?.organizationId}
    >
      <InnerWrapper>
        {/* {status !== "active" && (
        <DeactivatedWrapper>
           <img src={NotPublishedIcon} width="100%" /> 
        </DeactivatedWrapper>
      )}
      <ExpandButton handleButtonClick={handleButtonClick} /> */}

        <Typography variant="h3"> {title}</Typography>

        <Box
          alignItems="flex-start"
          flexDirection="row"
          gap="16px"
          margin="10px 0px 12px 0px"
        >
          <ImagePlaceholder
            width="118px"
            height="118px"
            img={
              logoURL
              // ? img : placeHodlerImage && NoImage
            }
          />

          <Typography variant="bodyBg"> {brief}</Typography>
        </Box>
        <Box alignItems="center" flexDirection="row" gap="14px">
          <Icon
            icon={setOrganizationTypeIcon(organizationCardData[1])}
            // transform="scale(0.8)"
          />

          <LogoPlacer>
            <ImagePlaceholder
              img={
                organizationCardData[2]
                // ? img : placeHodlerImage && NoImage
              }
            />
          </LogoPlacer>
          <Typography variant="buttonSm">{organizationCardData[0]}</Typography>

          <div style={{ marginLeft: "auto", display: "flex" }}>
            <IconWrapper>
              <Icon icon={<Bulb />} />
            </IconWrapper>
            <Typography variant="buttonSm">{ideasSize} </Typography>
          </div>
        </Box>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ProjectroomCard;

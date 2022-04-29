/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Typography from "../../atoms/typography/Typography";
import { ProjectroomCardProps } from "./ProjectroomCard.types";
import { t } from "i18next";

const Wrapper = styled.div<ProjectroomCardProps>`
  float: left;
  margin: 10px 0px 0px 10px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  width: 178px;
  height: auto;
  border-radius: 18px;

  width: 95%;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  max-width: 400px;
  height: auto;
  overflow: hidden;

  ${(props) => LayerWhiteFirstDefault}

  filter: ${(props) =>
    props.status === "deactivated" || props.status === "uncompleted"
      ? "brightness(0.6)"
      : "brightness(1)"};
  animation: opacityTranslateYFrom50Animation 0.8s;
`;

const InnerWrapper = styled.div`
  margin: 12px 18px;
`;
const LogoWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 118px;
  height: 118px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgba(195, 186, 162, 0.2);
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Thumbnail = styled.div`
  margin-top: 0px;
  margin-left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 100%;
  overflow: visible;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  margin-top: -4px;
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
  title,
  description,
  organizationType,
  organizationName,
  img,
  logo,
  ideaSize,
  status,
  active,
  thisOrganizationId,
  handleButtonClick,
}) => {
  return (
    <Wrapper
      status={status}
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

        <FlexWrapper
          alignItems="flex-start"
          direction="horizontal"
          gap="16px"
          margin="10px 0px 12px 0px"
        >
          <LogoWrapper>
            <Thumbnail
              img={
                img
                // ? img : placeHodlerImage && NoImage
              }
            />
          </LogoWrapper>

          <Typography variant="bodyBg"> {description}</Typography>
        </FlexWrapper>
        <FlexWrapper alignItems="center" direction="horizontal" gap="14px">
          <Icon icon={organizationType} transform="scale(0.8)" />

          <LogoPlacer>
            <Thumbnail
              img={
                logo
                // ? img : placeHodlerImage && NoImage
              }
            />
          </LogoPlacer>
          <Typography variant="buttonSm">{organizationName}</Typography>

          <div style={{ marginLeft: "auto", display: "flex" }}>
            <IconWrapper>
              <Icon icon="bulb" />
            </IconWrapper>
            <Typography variant="buttonSm">{ideaSize} </Typography>
          </div>
        </FlexWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ProjectroomCard;

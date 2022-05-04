/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Typography from "../../atoms/typography/Typography";
import { IdeaCardProps } from "./IdeaCard.types";
import { t } from "i18next";

const Wrapper = styled.div<IdeaCardProps>`
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
  margin: 12px 18px;
`;

const ProjectroomOpenButton = styled.button`
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  border: 0;
  bottom: 0;
`;
const IdeaCard: FC<IdeaCardProps> = ({ data, handleButtonClick }) => {
  const {
    title,
    body,
    Stadtteil,
    status,

    organizationType,
    projectroomName,
    thisOrganizationId,
  } = data;
  return (
    <Wrapper
      status={status}
      projectroomName={projectroomName}
      onClick={handleButtonClick}
    >
      <InnerWrapper>
        <FlexWrapper
          alignItems="center"
          flexDirection="row"
          gap="12px"
          margin="10px 0px 12px 0px"
        >
          <Icon icon="Sonstige" />
          <Typography variant="bodySm"> {Stadtteil}</Typography>
        </FlexWrapper>

        <Typography variant="h3"> {title}</Typography>

        <FlexWrapper
          alignItems="flex-start"
          flexDirection="row"
          gap="16px"
          margin="10px 0px 12px 0px"
        >
          <Typography variant="bodyBg"> {body}</Typography>
        </FlexWrapper>
      </InnerWrapper>

      {projectroomName && (
        <ProjectroomOpenButton>
          <FlexWrapper
            alignItems="center"
            flexDirection="row"
            gap="14px"
            margin="0px 10px"
          >
            <Icon icon={organizationType} transform="scale(0.8)" />

            <Typography variant="bodySm">{projectroomName}</Typography>
          </FlexWrapper>
        </ProjectroomOpenButton>
      )}
    </Wrapper>
  );
};

export default IdeaCard;

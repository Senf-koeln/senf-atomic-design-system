/** @format */

import { t } from "i18next";
import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import Typography from "../../atoms/typography/Typography";
import { OrganizationCardProps } from "./OrganizationCard.types";

const Wrapper = styled.div<OrganizationCardProps>`
  float: left;
  margin: 10px 0px 0px 10px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  width: 178px;
  height: auto;
  border-radius: 18px;

  ${(props) => LayerWhiteFirstDefault}

  filter: ${(props) =>
    props.status === "deactivated" || props.status === "uncompleted"
      ? "brightness(0.6)"
      : "brightness(1)"};
  animation: OrganizationCardAnimation 0.8s;
  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }
  @keyframes OrganizationCardAnimation {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const LogoWrapper = styled.div`
  /* position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 60px);
  margin: 10px;
  flex: none;
  border-radius: 18px;
  overflow: hidden; */
  position: relative;
  margin-top: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  width: 158px;
  height: 0;
  width: calc(100% - 20px);
  padding-bottom: calc(100% - 20px);
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgba(195, 186, 162, 0.2);
  border-radius: 10px;
  overflow: hidden;
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
  border-radius: 10px;
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
  margin: 134px 134px 69px 16px;
  position: absolute;
  bottom: 0;
  @media (max-width: 368px) {
    top: -32px;
  }
`;

const IconWrapper = styled.div`
  margin: 2px;
  margin-top: 0;
`;

const Title = styled.div`
  width: 140px;
  height: 24px;
  overflow: hidden;
  top: 0;
  position: relative;
  margin: 8px 16px 0px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.div`
  height: auto; /* 18px */
  width: auto;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
  font-weight: 500;
  font-style: normal;
  font-family: "Nunito", serif;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.3;
  text-align: left;
  margin: 0px 0px 12px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DeactivatedWrapper = styled.div`
  position: absolute;
  top: 40px;
  z-index: 5;
  color: white;
  width: 50%;
  margin-left: 25%;
`;

const OrganizationCard: FC<OrganizationCardProps> = ({
  title,
  projectRoomsSize,
  organizationType,
  img,
  status,
  active,
  thisOrganizationId,
  organization,
  handleButtonClick,
}) => {
  return (
    <Wrapper
      status={status}
      active={thisOrganizationId === organization?.organizationId}
    >
      {/* {status !== "active" && (
        <DeactivatedWrapper>
           <img src={NotPublishedIcon} width="100%" /> 
        </DeactivatedWrapper>
      )}
      <ExpandButton handleButtonClick={handleButtonClick} /> */}

      <LogoWrapper>
        <Thumbnail
          img={
            img
            // ? img : placeHodlerImage && NoImage
          }
        />
      </LogoWrapper>

      <LogoPlacer>
        <IconWrapper>
          <Icon icon={organizationType} transform="scale(0.8)" />
        </IconWrapper>
      </LogoPlacer>
      <Title>
        <Typography variant="bodyBg">{title}</Typography>
      </Title>
      <SubTitle>
        {projectRoomsSize}{" "}
        {projectRoomsSize === 1
          ? t("active_projectroom")
          : t("active_projectrooms")}
      </SubTitle>
    </Wrapper>
  );
};

export default OrganizationCard;

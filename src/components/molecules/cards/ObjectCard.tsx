/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import Typography from "../../atoms/typography/Typography";
import { ObjectCardProps } from "./ObjectCard.types";

const Wrapper = styled.div<ObjectCardProps>`
  cursor: pointer;
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
  animation: opacityTranslateYFrom50Animation 0.8s;

  @media (min-width: 768px) {
    transition: 0.3s;
    margin: 16px 8px 0px 8px;

    &:hover {
      transform: scale(103%);
      background-color: #fefefd;
    }
  }

  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }
`;

const LogoWrapper = styled.div<ObjectCardProps>`
  position: relative;
  margin-top: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  height: 0;
  width: calc(100% - 20px);
  padding-bottom: calc(100% - 22px);
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  border-radius: 10px;
  overflow: hidden;
`;

const Thumbnail = styled.div<ObjectCardProps>`
  margin-top: 0px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding-bottom: 100%;
  overflow: visible;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const LogoPlacer = styled.div<ObjectCardProps>`
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
  margin: 134px 134px 54px 16px;
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
  margin: 8px 16px 16px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

// const SubTitle = styled.div`
//   height: auto; /* 18px */
//   width: auto;
//   white-space: nowrap;
//   word-wrap: break-word;
//   word-break: break-word;
//   overflow: hidden;
//   font-weight: 500;
//   font-style: normal;
//   font-family: "Nunito", serif;
//   color: rgba(0, 0, 0, 0.4);
//   font-size: 14px;
//   letter-spacing: 0px;
//   line-height: 1.3;
//   text-align: left;
//   margin: 0px 0px 12px 16px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const DeactivatedWrapper = styled.div`
//   position: absolute;
//   top: 40px;
//   z-index: 5;
//   color: white;
//   width: 50%;
//   margin-left: 25%;
// `;

const ObjectCard: FC<ObjectCardProps> = ({ data, handleButtonOpenCard }) => {
  const { title, imgUrl, objectId } = data;
  return (
    <Wrapper
      onClick={(event) => handleButtonOpenCard(event, "objectCard", objectId)}
    >
      <LogoWrapper>
        <Thumbnail
          img={
            imgUrl
            // ? img : placeHodlerImage && NoImage
          }
        />
      </LogoWrapper>

      <Title>
        <Typography variant="bodyBg">{title}</Typography>
      </Title>
    </Wrapper>
  );
};

export default ObjectCard;

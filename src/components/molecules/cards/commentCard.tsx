/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import {
  LayerWhiteFirstDefault,
  LayerWhiteSecondDefault,
} from "../../atoms/layerStyles/LayerStyles";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { CommentCardProps } from "./CommentCard.types";
import { t } from "i18next";
import theme from "../../../styles/theme";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import More from "../../../assets/icons/More";

const Wrapper = styled.div<CommentCardProps>`
  cursor: pointer;
  float: left;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  width: 100%;

  height: auto;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.brown.brown20tra};

  animation: opacityTranslateYFrom50Animation 0.8s;
`;

const InnerWrapper = styled.div`
  margin: 12px 0px 12px 0px;
`;

const CommentCard: FC<CommentCardProps> = ({ data, handleOpenMenuComment }) => {
  const { t } = useTranslation();
  const { title, createdAt, userHandle, userId, commentId } = data;

  return (
    <Wrapper>
      <InnerWrapper>
        <Box justifyContent="space-between">
          <Box alignItems="flex-end" gap="3px">
            <Typography variant="buttonBg">{userHandle} </Typography>

            <Typography
              variant="buttonBg"
              color={theme.colors.black.black40tra}
            >
              {t("at")}
            </Typography>
            <Typography
              variant="buttonBg"
              color={theme.colors.black.black40tra}
            >
              {dayjs(createdAt).format("DD.MM.YYYY")}
            </Typography>
          </Box>
          <TertiaryButton
            iconLeft={<More />}
            onClick={() => handleOpenMenuComment(commentId, userId)}
          />
        </Box>
        <Box
          alignItems="flex-start"
          flexDirection="row"
          margin="8px 0px 8px 0px"
        >
          <Typography variant="bodyBg"> {title}</Typography>
        </Box>
      </InnerWrapper>
    </Wrapper>
  );
};

export default CommentCard;

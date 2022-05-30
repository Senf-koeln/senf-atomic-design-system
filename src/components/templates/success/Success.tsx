/** @format */

import React, { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import Box from "../../atoms/box/Box";
import { SuccessProps } from "./Success.types";

import SenfManCelebrating from "../../../assets/illustrations/SenfManCelebrating.png";
import Typography from "../../atoms/typography/Typography";
import { openLink } from "../../../util/helpers";
import Wave from "../../atoms/shapes/Wave";
import Mail from "../../../assets/icons/Mail";
import Google from "../../../assets/icons/Google";
import Apple from "../../../assets/icons/Apple";
import Arrow from "../../../assets/icons/Arrow";
import Bulb from "../../../assets/icons/Bulb";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Plus from "../../../assets/icons/Plus";
import Divider from "../../atoms/divider/Divider";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";

const Wrapper = styled.div<SuccessProps>`
  position: relative;
  width: 100%;
  /* max-width: 400px; */
  min-height: 100vh;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  right: -49px;
  margin-top: 55px;
  width: 226px;
  z-index: 1;
  pointer-events: none;
  user-select: none;
`;

const Success: FC<SuccessProps> = ({ variant, loading, setOrder }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Wave color="#fed957" top="170px" />

      <Img src={SenfManCelebrating} alt="Illustration" />

      <Box
        flexDirection="column"
        margin="180px 10% 0px 10%"
        position="relative"
        zIndex={9999}
      >
        <Typography variant="h1" style={{ position: "relative" }}>
          Super,
        </Typography>

        <Typography variant="h2" style={{ position: "relative" }}>
          Markus_123
        </Typography>

        <Box margin="25px 0px 24px 0px">
          <Typography variant="bodyBg" style={{ position: "relative" }}>
            {t("Success_subheadline")}
          </Typography>
        </Box>
        <Box gap="16px" flexDirection="column">
          <Button
            variant="white"
            fillWidth="max"
            text="Über Socialmedia teilen"
            iconLeft={<Bulb />}
            iconRight={<Arrow />}
            // loading={googleLoading}
            // onClick={() => setGoogleLoading(true)}
          />

          <Button
            variant="white"
            fillWidth="max"
            text="Beraten lassen"
            iconRight={<Arrow />}
            loading={loading}
            // icon={<Apple />}
            onClick={() => setOrder(2)}
          />
          <TertiaryButton
            variant="white"
            text="Zu deiner Idee"
            iconRight={<Arrow />}
            // loading={googleLoading}
            // onClick={() => setGoogleLoading(true)}
          />
          <Divider />
          <Button
            variant="white"
            fillWidth="max"
            text="Neue Idee teilen"
            icon={<Bulb />}
            // loading={googleLoading}
            // onClick={() => setGoogleLoading(true)}
          />
          <TertiaryButton
            variant="white"
            text="Zur Startseite"
            iconRight={<Arrow />}
            // loading={googleLoading}
            // onClick={() => setGoogleLoading(true)}
          />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Success;

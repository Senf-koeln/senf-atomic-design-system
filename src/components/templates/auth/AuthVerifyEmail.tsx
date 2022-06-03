/** @format */

import React, { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import Box from "../../atoms/box/Box";
import Form from "../../molecules/form/Form";
import { AuthVerifyEmailProps } from "./AuthVerifyEmail.types";
import { useFormik } from "formik";
import * as yup from "yup";

import Typography from "../../atoms/typography/Typography";
import { openLink } from "../../../util/helpers";
import Dropdown from "../../atoms/dropdown/Dropdown";

const AuthVerifyEmail: FC<AuthVerifyEmailProps> = ({ variant, loading }) => {
  const { t } = useTranslation();

  return (
    <Box
      flexDirection="column"
      margin="180px 10% 0px 10%"
      position="relative"
      zIndex={9999}
    >
      <Typography variant="h1" style={{ position: "relative" }}>
        {t("verify_header_1")}
      </Typography>
      <Typography variant="h1" style={{ position: "relative" }}>
        {t("verify_header_2")}
      </Typography>

      <Box margin="25px 0px 24px 0px" alignItems="center" gap="10px">
        <Typography variant="bodyBg">
          {t("email_receive")} <br /> &#40;
          {/* {history.location.state && history.location.state.email}{" "} */}
          {t("email_spam_folder")}&#41; <br />
          <br /> {t("email_verification_link")}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthVerifyEmail;

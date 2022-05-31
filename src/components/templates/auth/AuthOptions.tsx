/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import Box from "../../atoms/box/Box";
import { AuthOptionsProps } from "./AuthOptions.types";

import Typography from "../../atoms/typography/Typography";
import { openLink } from "../../../util/helpers";
import Mail from "../../../assets/icons/Mail";
import Google from "../../../assets/icons/Google";
import Apple from "../../../assets/icons/Apple";
import Facebook from "../../../assets/icons/Facebook";

const AuthOptions: FC<AuthOptionsProps> = ({
  handleGoogleSignIn,
  googleLoading,
  handleFacebookSignIn,
  facebookLoading,
  setPage,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      flexDirection="column"
      margin="180px 10% 0px 10%"
      position="relative"
      zIndex={9999}
    >
      <Typography variant="h1" style={{ position: "relative" }}>
        {t("infopage_addMustard_1")}
      </Typography>
      <Typography variant="h1" style={{ position: "relative" }}>
        {t("infopage_addMustard_2")}
      </Typography>

      <Box margin="25px 0px 24px 0px">
        <Typography variant="bodyBg" style={{ position: "relative" }}>
          {t("auth_subheadline")}
        </Typography>
      </Box>
      <Box gap="16px" flexDirection="column">
        <Button
          variant="white"
          fillWidth="max"
          text="Mit Google anmelden"
          icon={<Google />}
          loading={googleLoading}
          onClick={handleGoogleSignIn}
        />

        <Button
          variant="white"
          fillWidth="max"
          text="Mit Facebook anmelden"
          loading={facebookLoading}
          icon={<Facebook />}
          onClick={handleFacebookSignIn}
        />

        <Button
          variant="white"
          fillWidth="max"
          text="Mit Email-Adresse anmelden"
          onClick={() => setPage("authEmail")}
          icon={<Mail />}
        />
      </Box>

      <Box margin="24px 0px">
        <Typography variant="bodySm">
          <Trans i18nKey="register_agb">
            ...
            <span
              style={{ textDecoration: "underline", fontWeight: "700" }}
              onClick={() => openLink("senf.koeln/agb")}
            >
              ...
            </span>
            ...
            <span
              style={{ textDecoration: "underline", fontWeight: "700" }}
              onClick={() => openLink("senf.koeln/datenschutz")}
            >
              ...
            </span>
            ...
          </Trans>
        </Typography>
      </Box>

      {/* <Box
          flexDirection="row"
          gap="10px"
          alignItems="center"
          margin="20px 0 0 0 "
        >
          {variantState === "login" ? (
            <React.Fragment>
              <Typography variant="bodyBg" style={{ position: "relative" }}>
                {t("auth_login_user_redirection_question")}
              </Typography>{" "}
              <a
                style={{ position: "relative" }}
                onClick={() => setVariantState("register")}
              >
                {t("register_now")}
              </a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography variant="bodyBg" style={{ position: "relative" }}>
                {t("auth_register_user_redirection_question")}
              </Typography>
              <a
                style={{ position: "relative" }}
                onClick={() => setVariantState("login")}
              >
                {t("login_now")}
              </a>
            </React.Fragment>
          )}
        </Box> */}

      {/* <Form
          margin="24px 0 0 0"
          width="100%"
          inputItems={
            variantState === "register" ? inputItemsRegister : inputItemsLogin
          }
          formik={
            variantState === "register" ? formikRegisterStore : formikLoginStore
          }
        /> */}

      {/* <Box
          flexDirection="row"
          gap="10px"
          alignItems="center"
          margin="14px 0 36px 0"
        >
          {variantState === "login" ? (
            <React.Fragment>
              <p style={{ position: "relative" }}> {t("forgot_password")}</p>{" "}
              <a style={{ position: "relative" }}>{t("reset")}</a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography variant="bodySm" style={{ position: "relative" }}>
                <Trans i18nKey="register_agb">
                  ...
                  <span
                    style={{ textDecoration: "underline" }}
                    onClick={() => openLink("senf.koeln/agb")}
                  >
                    ...
                  </span>
                  ...
                  <span
                    style={{ textDecoration: "underline" }}
                    onClick={() => openLink("senf.koeln/datenschutz")}
                  >
                    ...
                  </span>
                  ...
                </Trans>
              </Typography>
            </React.Fragment>
          )}
        </Box> */}
      {/* <Button
          variant="white"
          fillWidth="max"
          text="Anmelden"
          loading={loading}
          onClick={
            variantState === "register"
              ? () => handleSubmitRegister(formikRegisterStore)
              : () => handleSubmitLogin(formikLoginStore)
          }
          disabled={
            variantState === "register"
              ? !formikRegisterStore?.isValid
              : !formikLoginStore?.isValid
          }
        /> */}
    </Box>
  );
};

export default AuthOptions;

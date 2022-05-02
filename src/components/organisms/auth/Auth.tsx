/** @format */

import React, { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Shape from "../../atoms/shapes/Shape";
import Form from "../../molecules/form/Form";
import { AuthProps } from "./Auth.types";
import { useFormik } from "formik";
import * as yup from "yup";

import SenfManSquating from "../../../assets/illustrations/senfManSquatting.png";
import Typography from "../../atoms/typography/Typography";
import { openLink } from "../../../util/helpers";

const StyledWrapper = styled.div<AuthProps>`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.beige.beige20};
`;

const RectShape = styled.div`
  position: absolute;
  width: 100%;
  top: 400px;
  height: calc(100% - 400px);
  background-color: ${(props) => props.theme.colors.primary.primary100};
`;
const Img = styled.img`
  position: absolute;
  margin-left: calc(50% - 60px);
  margin-top: 183px;
  width: 126px;
  z-index: 2;
`;
const StyledSvg = styled.svg`
  position: relative;
  margin-left: calc(50% - 20px);
  margin-top: 285px;
  z-index: 1;
`;
const ContentWrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  position: relative;
`;
const Auth: FC<AuthProps> = ({
  variant,
  loading,
  handleSubmitRegister,
  handleSubmitLogin,
}) => {
  const { t } = useTranslation();
  const [variantState, setVariantState] = useState("login");

  useEffect(() => {
    if (variant === "register") {
      setVariantState("register");
    }
  }, [variant]);

  const inputItemsLogin = [
    { name: "email", type: "email", placeholder: "E-Mail" },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const inputItemsRegister = [
    { name: "email", type: "email", placeholder: "E-Mail" },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
    {
      name: "handle",
      type: "text",
      placeholder: "Username",
    },
    {
      name: "gender",
      type: "text",
      placeholder: "Gender",
    },
    {
      name: "age",
      type: "text",
      placeholder: "Age",
    },
  ];

  const loginValidationSchema = yup.object({
    email: yup
      .string()
      .required(t("enter_email"))
      .email(t("enter_valid_email")),

    password: yup.string().required(t("enter_password")),
  });
  const registerValidationSchema = yup.object({
    email: yup
      .string()
      .required(t("enter_email"))
      .email(t("enter_valid_email")),

    password: yup
      .string()
      .required(t("enter_password"))
      .min(8, t("password_8characters"))
      .matches(/\d+/, t("password_with_number")),

    confirmPassword: yup
      .string()
      .required(t("confirmPassword"))
      .oneOf([yup.ref("password"), null], t("passwords_must_match")),
    handle: yup
      .string()
      .required(t("enter_username"))
      .min(3, t("username_too_short"))
      .max(20, t("username_too_long"))
      .matches(/^\S*$/, t("spaces_username"))
      .matches(/^[a-zA-Z0-9\-\_\.]*$/, t("username_latin_only")),
  });

  const formikLoginStore = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    validateOnMount: false,
    onSubmit: () => console.log("values"),
  });

  const formikRegisterStore = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      age: "",
      sex: "",
    },
    validationSchema: registerValidationSchema,
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => console.log("values"),
  });

  return (
    <StyledWrapper>
      <Shape />
      <RectShape />
      <Img src={SenfManSquating} alt="Illustration" />

      <StyledSvg xmlns="http://www.w3.org/2000/svg" width="175" height="69">
        <g>
          <defs>
            <linearGradient
              id="idX0hbBYeIVg-1861781537"
              gradientTransform="rotate(154, 0.5, 0.5)"
            >
              <stop
                offset="0"
                stop-color="rgba(186, 163, 79, 0)"
                stop-opacity="0"
              ></stop>
              <stop
                offset="1"
                stop-color="rgba(119, 108, 70, 0.46)"
                stop-opacity="0.46"
              ></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0.5 68.5 L 174.5 0.5 L 174.5 33.5 L 56.5 67 L 62 55.5 L 26 67 Z"
            fill="url(#idX0hbBYeIVg-1861781537)"
            stroke="hsla(0, 0%, 100%, 0)"
          ></path>
        </g>
      </StyledSvg>

      <FlexWrapper direction="vertical" width="80%" margin="25px 10%  0 10%">
        <Typography variant="h2" style={{ position: "relative" }}>
          {t("auth_headline")}
        </Typography>
        <FlexWrapper
          direction="horizontal"
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
        </FlexWrapper>

        <Form
          margin="24px 0 0 0"
          width="100%"
          inputItems={
            variantState === "register" ? inputItemsRegister : inputItemsLogin
          }
          formik={
            variantState === "register" ? formikRegisterStore : formikLoginStore
          }
        />

        <FlexWrapper
          direction="horizontal"
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
        </FlexWrapper>
        <Button
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
        />
      </FlexWrapper>
    </StyledWrapper>
  );
};

export default Auth;

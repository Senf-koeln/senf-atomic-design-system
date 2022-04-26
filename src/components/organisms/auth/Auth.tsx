/** @format */

import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Shape from "../../atoms/shapes/Shape";
import Form from "../../molecules/Form/Form";
import { AuthProps } from "./Auth.types";

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
  formikLoginStore,
  formikRegisterStore,
  handleSubmitRegister,
}) => {
  const { t } = useTranslation();
  const [variantState, setVariantState] = useState("login");

  useEffect(() => {
    if (variant === "register") {
      setVariantState("register");
    }
  }, [variant]);

  const inputItemsLogin = [
    { name: "haha", type: "email", placeholder: "E-Mail" },
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
      name: "username",
      type: "username",
      placeholder: "Username",
    },
    {
      name: "gender",
      type: "gender",
      placeholder: "Gender",
    },
    {
      name: "age",
      type: "age",
      placeholder: "Age",
    },
  ];
  return (
    <StyledWrapper>
      <Shape />
      <RectShape />
      <Img
        src={require("../../../assets/illustrations/senfManSquatting.png")}
        alt="Illustration"
      />

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
        <h2 style={{ position: "relative" }}>
          Hey, <br /> willkommen bei Senf.
        </h2>
        <FlexWrapper
          direction="horizontal"
          alignItems="center"
          margin="20px 0 0 0 "
        >
          {variantState === "login" ? (
            <React.Fragment>
              <p style={{ position: "relative" }}>Bist du neu?</p>{" "}
              <a
                style={{ position: "relative" }}
                onClick={() => setVariantState("register")}
              >
                {t("register_now")}
              </a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p style={{ position: "relative" }}>Hast du einen Account?</p>
              <a
                style={{ position: "relative" }}
                onClick={() => setVariantState("login")}
              >
                Jetzt anmelden
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
          alignItems="center"
          margin="14px 0 36px 0"
        >
          {variantState === "login" ? (
            <React.Fragment>
              <p style={{ position: "relative" }}>Passwort vergessen?</p>{" "}
              <a style={{ position: "relative" }}>Zurücksetzen</a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p style={{ position: "relative" }}>Hast du einen Account?</p>
            </React.Fragment>
          )}
        </FlexWrapper>
        <Button
          variant="white"
          fillWidth="max"
          text="Anmelden"
          loading={loading}
          onClick={handleSubmitRegister}
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

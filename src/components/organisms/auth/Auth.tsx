/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Button from "../../atoms/buttons/Button";
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
const Auth: FC<AuthProps> = ({ text }) => {
  return (
    <StyledWrapper>
      <Shape />
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
      <Form
        margin="0 10% 0 10%"
        maxWidth="80%"
        inputItems={[
          { name: "email", type: "email", placeholder: "E-Mail" },
          {
            name: "password",
            type: "password",
            placeholder: "Password",
          },
        ]}
      />
      <Button
        variant="white"
        fillWidth="max"
        text="Anmelden"
        margin="10px 10% 0 10%"
      />
    </StyledWrapper>
  );
};

export default Auth;

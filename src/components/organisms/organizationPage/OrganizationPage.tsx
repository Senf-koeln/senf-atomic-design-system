/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Dialog from "../../molecules/dialog/Dialog";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import { OrganizationPageProps } from "./OrganizationPage.types";

const SVGWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: -1;
  width: 100%;
  height: 300px;
`;

const Example: FC<OrganizationPageProps> = ({ openDialog, text }) => {
  return (
    <Dialog openDialog={true} right="0px">
      <RoundedButton icon="arrow" />

      {/* {organization?.userIds.includes(user.userId) && ( ROUNDEDMENUBUTTON)} */}
      <RoundedButton icon="Menu" />

      <SVGWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="466"
          style={{
            position: "absolute",
            zIndex: -1,
            marginTop: "40px",
            transform: "scale(1.2)",
          }}
        >
          <path
            d="M0.5 106.5V0.5L375.5 0V38.5C361 35.5 333 41 316 61C290.075 91.5 237.5 111.5 143 91.5C67.4 75.5 16 94.6667 0.5 106.5Z"
            fill="#FED957"
          />
        </svg>
      </SVGWrapper>
    </Dialog>
  );
};

export default Example;

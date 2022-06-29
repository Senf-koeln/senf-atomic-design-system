/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import Dialog from "../../molecules/dialog/Dialog";
import { ProcessIdeaPageProps } from "./ProcessIdeaPage.types";

const Wrapper = styled.div<ProcessIdeaPageProps>``;

const ProcessIdeaPage: FC<ProcessIdeaPageProps> = ({ text }) => {
  return (
    <Dialog
      openDialog={true}
      right="0px"
      backgroundColor={theme.colors.beige.beige20}
      overflow="hidden scroll"
      zIndex="999"
      boxShadow={
        document.body.clientWidth < 1350 &&
        document.body.clientWidth > 768 &&
        "-40px 8px 30px -12px rgba(0, 0, 0, 0.2)"
      }
    >
      {text}
    </Dialog>
  );
};

export default ProcessIdeaPage;

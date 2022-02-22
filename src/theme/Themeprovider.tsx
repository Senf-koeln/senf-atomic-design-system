/** @format */

import React, { FC } from "react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { ThemeProps } from "./Theme.types";

const StyledThemeProvider: FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;

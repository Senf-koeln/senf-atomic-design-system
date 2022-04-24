/** @format */
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import GlobalStyle from "../src/theme/globalStyle";
import theme from "../src/theme/theme";
import "../src/util/i18n"; // i18n configuration

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "lightgrey",
    values: [
      {
        name: "lightgrey",
        value: "lightgrey",
      },
      {
        name: "white",
        value: "white",
      },
      {
        name: "#fed957",
        value: "#fed957",
      },
      {
        name: "Beige",
        value: "rgb(249, 241, 215)",
      },
    ],
  },
};

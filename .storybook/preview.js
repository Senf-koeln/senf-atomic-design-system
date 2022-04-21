/** @format */
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import theme from "../src/theme/theme";

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]));

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

/** @format */
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import GlobalStyle from "../src/styles/globals";
import theme from "../src/styles/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import i18n from "../src/util/i18n";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

export const decorators = [
  (Story) => (
    <React.Suspense fallback="Loading">
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
          <div id="portal-root-modal" />
          <div id="portal-root-dialog" />
        </ThemeProvider>
      </I18nextProvider>
    </React.Suspense>
  ),
];

export const parameters = {
  i18n,
  locale: "de",
  locales: {
    en: { title: "English", left: "🇺🇸" },
    de: { title: "German", left: "🇩🇪" },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
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

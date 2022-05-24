/** @format */
import type { Theme } from "styled-system";

const theme: Theme = {
  fontFamily: "Nunito",

  //SPACE are not complete/verified
  space: [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44],

  // font sizes converted from px to default browsers rem (16 px base)
  fontSizes: [12, 14, 16, 20, 24, 32].map((numInPX) => numInPX / 16),
  fontWeights: [500, 600, 700, 800],

  lineHeight: [1.2, 1.3, 1.4, 1.5],
  letterSpacings: [0],

  //what exactly is SIZES? Do we need that?
  sizes: [],

  //should we split up BORDERS?? Is borderstyles really necessary? Bestpractices?
  borders: [],
  borderWidths: [0, 1, 2, 3],
  borderStyles: ["dashed", "solid"],

  //RADII are not complete/verified
  radii: [8, 10, 18, 20, 24, 28, 30],

  //OPACITIES are not complete/verified
  opacities: [0.4, 0.6, 0.75],

  shadows: [
    "0px 12px 18px -8px",
    "0px 4px 6px -2px",
    "0px -4px 10px 4px",
    "0px -2px 5px 2px",
    "0px 12px 18px -10px",
    "0px 6px 8px -1px",
  ],

  //Does Louis define the TRANSITIONS??
  transitions: [],

  //bestpractice for ZINDICES??
  zIndices: [0, 1],

  colors: {
    primary: {
      primary160: "#d6ab00",
      primary140: "#e8ba02",
      primary120: "#f2c71c",
      primary100: "#fed957",
      primary75: "#fee381",
      primary50: "#feecab",
      primary35: "#fff2c4",
      primary20: "#fff7dd",
    },
    beige: {
      beige100: "#e2b736",
      beige75: "#e9c968",
      beige50: "#f0db9a",
      beige35: "#f5e6b9",
      beige20: "#f9f1d7",
      beige10: "#fcf8eb",
      beige75tra: "rgba(226, 183, 54, 0.75)",
      beige50tra: "rgba(226, 183, 54, 0.5)",
      beige35tra: "rgba(226, 183, 54, 0.35)",
      beige20tra: "rgba(226, 183, 54, 0.2)",
      beige10tra: "rgba(226, 183, 54, 0.1)",
    },
    brown: {
      brown100: "#baa04f",
      brown75: "#cbb87b",
      brown50: "#dccfa7",
      brown35: "#e7dec2",
      brown20: "#f1ecdc",
      brown10: "#F8F5ED",
      brown7: "#faf8f3",
      brown4: "#fcfbf8",
      brown75tra: "rgba(186, 160, 79, 0.75)",
      brown50tra: "rgba(186, 160, 79, 0.5)",
      brown35tra: "rgba(186, 160, 79, 0.35)",
      brown20tra: "rgba(186, 160, 79, 0.2)",
      brown10tra: "rgba(186, 160, 79, 0.1)",
      brown7tra: "rgba(186, 160, 79, 0.07)",
      brown4tra: "rgba(186, 160, 79, 0.04)",
    },
    greyscale: {
      greyscale100: "#c3baa2",
      greyscale75: "#d2cbb9",
      greyscale50: "#e1dcd0",
      greyscale35: "#eae7df",
      greyscale20: "#f3f1ec",
      greyscale10: "#f8f7f5",
      greyscale8: "#fafaf9",
      greyscale5: "#fcfcfb",
      greyscale75tra: "rgba(195, 186, 162, 0.75)",
      greyscale50tra: "rgba(195, 186, 162, 0.5)",
      greyscale35tra: "rgba(195, 186, 162, 0.35)",
      greyscale20tra: "rgba(195, 186, 162, 0.2)",
      greyscale10tra: "rgba(195, 186, 162, 0.11)",
      greyscale8tra: "rgba(192, 188, 175, 0.08)",
      greyscale5tra: "rgba(192, 188, 175, 0.05)",
    },
    black: {
      black100: "rgba(0, 0, 0, 1)",
      black80tra: "rgba(0, 0, 0, 0.8)",
      black60tra: "rgba(0, 0, 0, 0.6)",
      black40tra: "rgba(0, 0, 0, 0.4)",
      black30tra: "rgba(0, 0, 0, 0.3)",
    },
    white: {
      white100: "rgba(255, 255, 255, 1)",
      white80tra: "rgba(255, 255, 255, 0.8)",
      white60tra: "rgba(255, 255, 255, 0.6)",
      white50tra: "rgba(255, 255, 255, 0.5)",
      white40tra: "rgba(255, 255, 255, 0.4)",
      white30tra: "rgba(255, 255, 255, 0.3)",
      white20tra: "rgba(255, 255, 255, 0.2)",
    },
    signal: {
      redDark: "#ca3336",
      red: "#ff3c3e",
      greenDark: "#00857b",
      green: "#009a8e",
      blueDark: "#241ebe",
      blue: "#322bf3",
    },
    primaryHoverLayerShadowColor: "rgba(235, 184, 0, 0.5)",
  },
};

export default theme;

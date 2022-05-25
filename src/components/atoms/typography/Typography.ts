/** @format */
import styled from "styled-components";
import { TypographyProps } from "./Typography.types";

const Typography = styled.p<TypographyProps>`
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.fontFamily};

  ${({ variant, theme }) => {
    let fontSize: string;
    let fontWeight: number | string;
    let lineHeight: string;
    let color: string;
    switch (variant) {
      case "h1":
        fontSize = `${theme.fontSizes[5]}rem`;
        fontWeight = theme.fontWeights[3];
        lineHeight = `${theme.lineHeight[0]}em`;
        color = `${theme.colors.black.black100}`;
        break;
      case "h2":
        fontSize = `${theme.fontSizes[4]}rem`;
        fontWeight = theme.fontWeights[3];
        lineHeight = `${theme.lineHeight[2]}em`;
        color = `${theme.colors.black.black100}`;
        break;
      case "h3":
        fontSize = `${theme.fontSizes[3]}rem`;
        fontWeight = theme.fontWeights[2];
        lineHeight = `${theme.lineHeight[1]}em`;
        color = `${theme.colors.black.black100}`;
        break;
      case "buttonBg":
        fontSize = `${theme.fontSizes[2]}rem`;
        fontWeight = theme.fontWeights[2];
        lineHeight = `${theme.lineHeight[3]}em`;
        color = `${theme.colors.black.black80tra}`;
        break;
      case "buttonSm":
        fontSize = `${theme.fontSizes[1]}rem`;
        fontWeight = theme.fontWeights[2];
        lineHeight = `${theme.lineHeight[1]}em`;
        color = `${theme.colors.black.black80tra}`;
        break;
      case "bodyBg":
        fontSize = `${theme.fontSizes[2]}rem`;
        fontWeight = theme.fontWeights[0];
        lineHeight = `${theme.lineHeight[3]}em`;
        color = `${theme.colors.black.black80tra}`;
        break;
      case "bodySm":
        fontSize = `${theme.fontSizes[1]}rem`;
        fontWeight = theme.fontWeights[0];
        lineHeight = `${theme.lineHeight[1]}em`;
        color = `${theme.colors.black.black80tra}`;
        break;
      case "footnote":
        fontSize = `${theme.fontSizes[0]}rem`;
        fontWeight = theme.fontWeights[1];
        lineHeight = `${theme.lineHeight[2]}em`;
        color = `${theme.colors.black.black80tra}`;
        break;
      default:
        fontSize = "";
        fontWeight = "";
        lineHeight = "";
        color = "";
        break;
    }
    return `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-Height: ${lineHeight};
    color: ${color};
    `;
  }}

  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;

export default Typography;

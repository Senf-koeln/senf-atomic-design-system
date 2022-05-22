/** @format */
import { css } from "styled-components";

export const LayerWhiteGradientBordersDefault = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[0]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[2]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.brown.brown4};

  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(180deg, #fff, #f8f5ed);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px ${({ theme }) => theme.colors.brown.brown4} inset;
`;

export const LayerWhiteFirstDefault = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[0]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[2]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.brown.brown4};
  border: 2px solid ${({ theme }) => theme.colors.white.white100};
`;

export const LayerWhiteFirstHover = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[0]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[2]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  border: 2px solid ${({ theme }) => theme.colors.white.white40tra};
`;

export const LayerWhiteFirstActive = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[0]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[2]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.primary.primary50};
  border: 2px solid ${({ theme }) => theme.colors.primary.primary140};
`;

export const LayerWhiteSecondDefault = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[1]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[3]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.brown.brown10};
  border: 2px solid ${({ theme }) => theme.colors.white.white40tra};
`;

export const LayerWhiteSecondHover = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[1]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[3]}${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20};
  border: 2px solid ${({ theme }) => theme.colors.white.white40tra};
`;

export const LayerYellowDefault = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[4]}
    ${({ theme }) => theme.colors.primaryHoverLayerShadowColor};
  background-color: ${({ theme }) => theme.colors.primary.primary100};
  overflow: visible;

  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(186, 160, 79, 0.04));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px ${({ theme }) => theme.colors.primary.primary100}
    inset;
`;

export const LayerYellowHover = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[4]}
    ${({ theme }) => theme.colors.primaryHoverLayerShadowColor};
  background-color: ${({ theme }) => theme.colors.primary.primary120};
  overflow: visible;
  /* border: 2px solid rgba(186, 160, 79, 0.1); */

  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(186, 160, 79, 0.04));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px ${({ theme }) => theme.colors.primary.primary120}
    inset;
`;

export const LayerBrownDefault = css`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.brown.brown10tra};
  border: 2px solid ${({ theme }) => theme.colors.brown.brown40tra};
`;

export const LayerBrownHover = css`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.brown.brown20tra};
  border: 2px solid ${({ theme }) => theme.colors.brown.brown7tra};
`;

export const LayerGreyDefault = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[0]}${({ theme }) =>
  theme.colors.greyscale.greyscale20tra}
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale10tra};
  border: 2px solid ${({ theme }) => theme.colors.greyscale.greyscale8tra};
`;

export const LayerGreyHover = css`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[0]}
    ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  border: 2px solid ${({ theme }) => theme.colors.greyscale.greyscale10tra};
`;

export const LayerGreyButtonsDefault = css`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale10tra};
  border: 2px solid ${({ theme }) => theme.colors.greyscale.greyscale8tra};
`;

export const LayerGreyButtonsHover = css`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  border: 2px solid ${({ theme }) => theme.colors.greyscale.greyscale10tra};
`;

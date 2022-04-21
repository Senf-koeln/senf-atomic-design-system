/** @format */
import { css } from "styled-components";

export const LayerWhiteFirstDefault = css`
  box-sizing: border-box;
  box-shadow: 0px 12px 18px -8px rgba(186, 160, 79, 0.2),
    0px -4px 10px 4px rgba(255, 255, 255, 0.2);
  background-color: ${(props) => props.theme.colors.brown.brown4};
  overflow: visible;
  border: 2px solid #ffffff;
`;

export const LayerWhiteFirstHover = css`
  box-sizing: border-box;
  box-shadow: 0px 12px 18px -8px rgba(186, 160, 79, 0.2),
    0px -4px 10px 4px rgba(255, 255, 255, 0.2);
  background-color: ${(props) => props.theme.colors.greyscale.greyscale20};
  overflow: visible;
  border: 2px solid
    var(--token-1fb7d6d0-1eac-4ac8-a8b8-f016de471a04, rgba(255, 255, 255, 0.4))
    /* {"name":"White 040 transparent"} */;
`;

export const LayerWhitSecondDefault = css`
  box-sizing: border-box;
  box-shadow: 0px 4px 6px -2px rgba(186, 160, 79, 0.2),
    0px -2px 5px 2px rgba(255, 255, 255, 0.2);
  background-color: ${(props) => props.theme.colors.brown.brown10};
  overflow: visible;
  border: 2px solid
    var(--token-1fb7d6d0-1eac-4ac8-a8b8-f016de471a04, rgba(255, 255, 255, 0.4))
    /* {"name":"White 040 transparent"} */;
`;

export const LayerWhitSecondHover = css`
  box-sizing: border-box;
  box-shadow: 0px 4px 6px -2px var(
        --token-1b934134-2ca5-4f4e-85f7-23e508bbf2a5,
        rgba(186, 160, 79, 0.2)
      ) /* {"name":"Brown 020 transparent"} */,
    0px -2px 5px 2px var(
        --token-9d5754a0-f478-42c4-94f1-2a2608c50c5c,
        rgba(255, 255, 255, 0.2)
      ) /* {"name":"White 020 transparent"} */;
  background-color: ${(props) => props.theme.colors.greyscale.greyscale20};
  overflow: visible;
  border: 2px solid
    var(--token-1fb7d6d0-1eac-4ac8-a8b8-f016de471a04, rgba(255, 255, 255, 0.4))
    /* {"name":"White 040 transparent"} */;
`;

export const LayerYellowDefault = css`
  box-sizing: border-box;
  box-shadow: 0px 12px 18px -10px rgba(235, 184, 0, 0.5);
  background-color: ${(props) => props.theme.colors.primary.primary100};
  overflow: visible;
  border: 2px solid rgba(186, 160, 79, 0.1);
`;

export const LayerYellowHover = css`
  box-sizing: border-box;
  box-shadow: 0px 12px 18px -10px rgba(235, 184, 0, 0.5);
  background-color: #f5c70e;
  overflow: visible;
  border: 2px solid rgba(186, 160, 79, 0.1);
`;

export const LayerBrownDefault = css`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.brown.brown10tra};
  overflow: visible;
  border: 2px solid
    var(--token-a71bec17-553e-409c-88a6-81d800451193, rgba(186, 160, 79, 0.04))
    /* {"name":"Brown 004 transparent"} */;
`;

export const LayerBrownHover = css`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.brown.brown20tra};
  overflow: visible;
  border: 2px solid
    var(--token-432d1363-f9f8-4c38-bd46-43b1bfa7dd82, rgba(186, 160, 79, 0.07))
    /* {"name":"Brown 007 transparent"} */;
`;

export const LayerGreyDefault = css`
  box-sizing: border-box;
  box-shadow: 0px 12px 18px -8px var(
      --token-29fe1576-744d-42a8-b0e0-d66e55a23091,
      rgba(195, 186, 162, 0.2)
    ) /* {"name":"Grey 020 transparent"} */;
  background-color: ${(props) => props.theme.colors.greyscale.greyscale10tra};
  overflow: visible;
  border: 2px solid
    var(--token-d477fcb4-e291-42b1-959d-3a9792548461, rgba(192, 188, 175, 0.08))
    /* {"name":"Grey 008 transparent"} */;
`;

export const LayerGreyHover = css`
  box-sizing: border-box;
  box-shadow: 0px 12px 18px -8px var(
      --token-29fe1576-744d-42a8-b0e0-d66e55a23091,
      rgba(195, 186, 162, 0.2)
    ) /* {"name":"Grey 020 transparent"} */;
  background-color: ${(props) => props.theme.colors.greyscale.greyscale20tra};
  overflow: visible;
  border: 2px solid
    var(--token-5bbcce48-59bd-4735-9226-d3acacf1ec9f, rgba(195, 186, 162, 0.11))
    /* {"name":"Grey 010 transparent"} */;
`;

export const LayerGreyButtonsDefault = css`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.greyscale.greyscale10tra};
  overflow: visible;
  border: 2px solid
    var(--token-d477fcb4-e291-42b1-959d-3a9792548461, rgba(192, 188, 175, 0.08))
    /* {"name":"Grey 008 transparent"} */;
`;

export const LayerGreyButtonsHover = css`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.greyscale.greyscale20tra};
  overflow: visible;
  border: 2px solid
    var(--token-5bbcce48-59bd-4735-9226-d3acacf1ec9f, rgba(195, 186, 162, 0.11))
    /* {"name":"Grey 010 transparent"} */;
`;

/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Box from "../box/Box";
import {
  LayerWhiteFirstActive,
  LayerWhiteFirstDefault,
  LayerWhiteFirstHover,
  LayerYellowDefault,
  LayerYellowHover,
} from "../layerStyles/LayerStyles";
import ToggleInput from "../toggleInput/ToggleInput";
import Typography from "../typography/Typography";
import { ContentDropdownItemProps } from "./ContentDropdownItem.types";

const Wrapper = styled.div<ContentDropdownItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 6px 0px 0px;
  width: auto;
  height: 30px;
  border-radius: 8px;

  box-sizing: border-box;
  border: ${({ type }) => type === "withoutIcon" && "2px solid transparent"};

  ${({ checked, type }) =>
    checked && type === "withoutIcon" ? LayerYellowDefault : null}

  &:hover {
    background-color: ${({ checked, type, theme }) =>
      type !== "withoutIcon"
        ? theme.colors.greyscale.greyscale10tra
        : theme.colors.white.white50tra};

    ${({ checked, type }) =>
      checked && type === "withoutIcon" ? LayerYellowHover : null}
  }
`;

const ContentDropdownItem: FC<ContentDropdownItemProps> = ({
  type,
  text,
  checked,
  setChecked,
}) => {
  return (
    <Wrapper checked={checked} type={type} onClick={setChecked}>
      {type !== "withoutIcon" && (
        <Box
          width="33px"
          height="33px"
          justifyContent="center"
          alignItems="center"
        >
          <ToggleInput type={type} checked={checked} />
        </Box>
      )}
      <Box margin="0px 6px 0px 0px">
        <Typography variant="bodySm" fontWeight={checked ? "bold" : "regular"}>
          {text}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default ContentDropdownItem;

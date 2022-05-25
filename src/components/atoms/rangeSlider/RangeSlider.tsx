/** @format */

import React, { FC, useState } from "react";
import Box from "../box/Box";
import Typography from "../typography/Typography";
import { Wrapper, Input } from "./rangeSlider.styles";
import { RangeSliderProps } from "./RangeSlider.types";

const RangeSlider: FC<RangeSliderProps> = ({
  rangeValue = 0,
  setRangeValue,
  rangeMin = 0,
  rangeMax = 1,
  lineColor,
  lineBorderColor,
  thumbColor,
  thumbBorderColor,
  leftTick = "0",
  rightTick = "100",
}) => {
  // const [rangeValue, setRangeValue] = useState(50);

  const changeRange = (event: any) => {
    setRangeValue(event.target.value);
    console.log(rangeValue);
  };
  return (
    <Wrapper>
      <Input
        type="range"
        min={rangeMin}
        max={rangeMax}
        value={rangeValue}
        step="0.01"
        id="myRange"
        onInput={(event) => changeRange(event)}
        lineColor={lineColor}
        lineBorderColor={lineBorderColor}
        thumbColor={thumbColor}
        thumbBorderColor={thumbBorderColor}
      />
      <Box margin="10px 13px" justifyContent="space-between">
        <Typography variant="bodySm">{leftTick}</Typography>
        <Typography variant="bodySm">{rightTick}</Typography>
      </Box>
    </Wrapper>
  );
};

export default RangeSlider;

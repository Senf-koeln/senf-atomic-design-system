/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import RangeSlider from "./RangeSlider";

import { RangeSliderProps } from "./RangeSlider.types";

export default {
  title: "Atom/RangeSlider",
  component: RangeSlider,
  argTypes: {},
} as Meta<typeof RangeSlider>;

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ToggleInput from "./ToggleInput";

import { ToggleInputProps } from "./ToggleInput.types";

export default {
  title: "Atom/ToggleInput",
  component: ToggleInput,
  argTypes: {},
} as Meta<typeof ToggleInput>;

const Template: Story<ToggleInputProps> = (args) => <ToggleInput {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
};

export const Radio = Template.bind({});
Radio.args = {
  type: "radio",
};

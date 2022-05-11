/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Divider from "./Divider";

import { DividerProps } from "./Divider.types";

export default {
  title: "Atom/Divider",
  component: Divider,
  argTypes: {},
} as Meta<typeof Divider>;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

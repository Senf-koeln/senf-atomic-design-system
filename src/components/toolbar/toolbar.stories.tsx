/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Toolbar from "./Toolbar";

import { ToolbarProps } from "./Toolbar.types";

export default {
  title: "Molecules/Toolbar",
  component: Toolbar,
  argTypes: {},
} as Meta<typeof Toolbar>;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Switch from "./Switch";

import { SwitchProps } from "./Switch.types";

export default {
  title: "Atom/Switch",
  component: Switch,
  argTypes: {},
} as Meta<typeof Switch>;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

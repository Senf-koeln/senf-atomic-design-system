/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import MobileTopBar from "./MobileTopBar";
import { MobileTopBarProps } from "./MobileTopBar.types";

export default {
  title: "Organisms/MobileTopBar",
  component: MobileTopBar,
  argTypes: {},
} as Meta<typeof MobileTopBar>;

const Template: Story<MobileTopBarProps> = (args) => <MobileTopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

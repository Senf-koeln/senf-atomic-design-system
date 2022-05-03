/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import SubNavbar from "./SubNavbar";

import { SubNavbarProps } from "./SubNavbar.types";

export default {
  title: "Molecules/SubNavbar",
  component: SubNavbar,
  argTypes: {},
} as Meta<typeof SubNavbar>;

const Template: Story<SubNavbarProps> = (args) => <SubNavbar {...args} />;

export const Example = Template.bind({});
Example.args = {
  header: "Organisationen",
};

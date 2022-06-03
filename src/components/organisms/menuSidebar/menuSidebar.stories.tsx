/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import MenuSidebar from "./MenuSidebar";

import { MenuSidebarProps } from "./MenuSidebar.types";

export default {
  title: "Organisms/MenuSidebar",
  component: MenuSidebar,
  argTypes: {},
} as Meta<typeof MenuSidebar>;

const Template: Story<MenuSidebarProps> = (args) => <MenuSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

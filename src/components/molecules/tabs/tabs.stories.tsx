/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import MainSwipeListTabs from "./MainSwipeListTabs";

import { MainSwipeListTabsProps } from "./MainSwipeListTabs.types";

export default {
  title: "Organisms/MainSwipeListTabs",
  component: MainSwipeListTabs,
  argTypes: {},
} as Meta<typeof MainSwipeListTabs>;

const Template: Story<MainSwipeListTabsProps> = (args) => (
  <MainSwipeListTabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  order: "ideas",
  text: "x",
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import DetailSidebar from "./DetailSidebar";

import { DetailSidebarProps } from "./DetailSidebar.types";

export default {
  title: "Organisms/DetailSidebar",
  component: DetailSidebar,
  argTypes: {},
} as Meta<typeof DetailSidebar>;

const Template: Story<DetailSidebarProps> = (args) => (
  <DetailSidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

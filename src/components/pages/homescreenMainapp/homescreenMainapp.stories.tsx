/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import HomescreenMainapp from "./HomescreenMainapp";

import { HomescreenMainappProps } from "./HomescreenMainapp.types";

export default {
  title: "Pages/HomescreenMainapp",
  component: HomescreenMainapp,
  argTypes: {},
} as Meta<typeof HomescreenMainapp>;

const Template: Story<HomescreenMainappProps> = (args) => (
  <HomescreenMainapp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selectedTopics: ["Versorgung"],
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import MainApp from "./MainApp";

import { MainAppProps } from "./MainApp.types";

export default {
  title: "Templates/MainApp",
  component: MainApp,
  argTypes: {},
} as Meta<typeof MainApp>;

const Template: Story<MainAppProps> = (args) => <MainApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedTopics: ["Versorgung"],
};

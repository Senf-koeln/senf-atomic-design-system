/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ProcessIdeaPage from "./ProcessIdeaPage";

import { ProcessIdeaPageProps } from "./ProcessIdeaPage.types";

export default {
  title: "Pages/ProcessIdeaPage",
  component: ProcessIdeaPage,
  argTypes: {},
} as Meta<typeof ProcessIdeaPage>;

const Template: Story<ProcessIdeaPageProps> = (args) => (
  <ProcessIdeaPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

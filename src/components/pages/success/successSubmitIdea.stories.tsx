/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import SuccessSubmitIdea from "./SuccessSubmitIdea";

import { SuccessSubmitIdeaProps } from "./SuccessSubmitIdea.types";

export default {
  title: "Pages/SuccessSubmitIdea",
  component: SuccessSubmitIdea,
  argTypes: {},
} as Meta<typeof SuccessSubmitIdea>;

const Template: Story<SuccessSubmitIdeaProps> = (args) => (
  <SuccessSubmitIdea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

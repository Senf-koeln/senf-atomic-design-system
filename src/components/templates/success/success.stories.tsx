/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Success from "./Success";

import { SuccessProps } from "./Success.types";

export default {
  title: "Templates/Success",
  component: Success,
  argTypes: {},
} as Meta<typeof Success>;

const Template: Story<SuccessProps> = (args) => <Success {...args} />;

export const Default = Template.bind({});

Default.args = {
  loading: false,
};

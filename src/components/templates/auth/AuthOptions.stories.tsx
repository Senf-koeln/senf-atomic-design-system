/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import AuthOptions from "./AuthOptions";

import { AuthOptionsProps } from "./AuthOptions.types";

export default {
  title: "Templates/AuthOptions",
  component: AuthOptions,
  argTypes: {},
} as Meta<typeof AuthOptions>;

const Template: Story<AuthOptionsProps> = (args) => <AuthOptions {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: "login",
  loading: false,
  formikRegisterStore: { isValid: true },
};

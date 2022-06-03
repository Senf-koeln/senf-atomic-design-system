/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import AuthVerifyEmail from "./AuthVerifyEmail";

import { AuthVerifyEmailProps } from "./AuthVerifyEmail.types";

export default {
  title: "Templates/AuthVerifyEmail",
  component: AuthVerifyEmail,
  argTypes: {},
} as Meta<typeof AuthVerifyEmail>;

const Template: Story<AuthVerifyEmailProps> = (args) => (
  <AuthVerifyEmail {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variant: "login",
  loading: false,
  formikRegisterStore: { isValid: true },
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import AuthResetEmail from "./AuthResetEmail";

import { AuthResetEmailProps } from "./AuthResetEmail.types";

export default {
  title: "Templates/AuthResetEmail",
  component: AuthResetEmail,
  argTypes: {},
} as Meta<typeof AuthResetEmail>;

const Template: Story<AuthResetEmailProps> = (args) => (
  <AuthResetEmail {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variant: "login",
  loading: false,
  formikRegisterStore: { isValid: true },
};

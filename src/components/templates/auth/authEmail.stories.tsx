/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import AuthEmail from "./AuthEmail";

import { AuthEmailProps } from "./AuthEmail.types";

export default {
  title: "Templates/AuthEmail",
  component: AuthEmail,
  argTypes: {},
} as Meta<typeof AuthEmail>;

const Template: Story<AuthEmailProps> = (args) => <AuthEmail {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: "login",
  loading: false,
  formikRegisterStore: { isValid: true },
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Auth from "./Auth";

import { AuthProps } from "./Auth.types";

export default {
  title: "Organisms/Auth",
  component: Auth,
  argTypes: {},
} as Meta<typeof Auth>;

const Template: Story<AuthProps> = (args) => <Auth {...args} />;

export const Login = Template.bind({});

Login.args = {
  variant: "login",
  loading: false,
  formikRegisterStore: { isValid: true },
};

export const LoginDisabled = Template.bind({});
LoginDisabled.args = {
  variant: "login",
};

export const LoginLoading = Template.bind({});
LoginLoading.args = {
  variant: "login",
  formikLoginStore: { isValid: true },
  loading: true,
};

export const Register = Template.bind({});
Register.args = {
  variant: "register",
};

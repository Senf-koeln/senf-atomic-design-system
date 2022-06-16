/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Auth from "./Auth";

import { AuthProps } from "./Auth.types";

export default {
  title: "Pages/Auth",
  component: Auth,
  argTypes: {},
} as Meta<typeof Auth>;

const Template: Story<AuthProps> = (args) => <Auth {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClose: () => {},
  handleSubmitRegister: () => {},
  registerLoading: false,
  handleSubmitLogin: () => {},
  loginLoading: false,
  handleGoogleSignIn: () => {},
  googleLoading: false,
  handleFacebookSignIn: () => {},
  facebookLoading: false,
  resetLoading: false,
  handleSubmitResetEmail: () => {},
  socialLoginVerified: false,
  emailRegistrationSubmitted: false,
  emailVerified: false,
};

export const ResetEmailPage = Template.bind({});
ResetEmailPage.args = {
  page: "authResetEmail",
};
export const VerifyPage = Template.bind({});
VerifyPage.args = {
  emailRegistrationSubmitted: true,
};

export const AddDetailsPage = Template.bind({});
AddDetailsPage.args = {
  verifiedUser: true,
};

export const SuccessPage = Template.bind({});
SuccessPage.args = {
  verifiedUser: true,
  addedDetails: true,
};

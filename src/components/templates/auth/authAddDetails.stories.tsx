/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import AuthAddDetails from "./AuthAddDetails";

import { AuthAddDetailsProps } from "./AuthAddDetails.types";

export default {
  title: "Templates/AuthAddDetails",
  component: AuthAddDetails,
  argTypes: {},
} as Meta<typeof AuthAddDetails>;

const Template: Story<AuthAddDetailsProps> = (args) => (
  <AuthAddDetails {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variant: "login",
  loading: false,
  formikRegisterStore: { isValid: true },
};

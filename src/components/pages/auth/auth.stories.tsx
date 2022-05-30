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
  text: "x",
};

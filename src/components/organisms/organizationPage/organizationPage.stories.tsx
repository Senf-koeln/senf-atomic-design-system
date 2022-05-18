/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import OrganizationPage from "./OrganizationPage";

import { OrganizationPageProps } from "./OrganizationPage.types";

export default {
  title: "Organisms/OrganizationPage",
  component: OrganizationPage,
  argTypes: {},
} as Meta<typeof OrganizationPage>;

const Template: Story<OrganizationPageProps> = (args) => (
  <OrganizationPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

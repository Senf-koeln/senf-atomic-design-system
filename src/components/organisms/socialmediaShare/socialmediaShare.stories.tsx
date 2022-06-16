/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import SocialmediaShare from "./SocialmediaShare";

import { SocialmediaShareProps } from "./SocialmediaShare.types";

export default {
  title: "Organisms/SocialmediaShare",
  component: SocialmediaShare,
  argTypes: {},
} as Meta<typeof SocialmediaShare>;

const Template: Story<SocialmediaShareProps> = (args) => (
  <SocialmediaShare {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import X from "./X";

import { XProps } from "./X.types";

export default {
  title: "Organisms/Example",
  component: X,
  argTypes: {},
} as Meta<typeof X>;

const Template: Story<XProps> = (args) => <X {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: "x",
};

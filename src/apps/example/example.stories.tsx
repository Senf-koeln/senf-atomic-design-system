/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Example from "./Example";

import { ExampleProps } from "./Example.types";

export default {
  title: "Apps/Example",
  component: Example,
  argTypes: {},
} as Meta<typeof Example>;

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "x",
};

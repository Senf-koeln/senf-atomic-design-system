/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import RoundedButton from "./RoundedButton";
import { ButtonProps } from "./Button.types";

export default {
  title: "Atom/RoundedButton",
  component: RoundedButton,
  argTypes: {},
} as Meta<typeof RoundedButton>;

const Template: Story<ButtonProps> = (args) => <RoundedButton {...args} />;

export const AddButton = Template.bind({});
AddButton.args = {
  variant: "plus",
};

export const BackButton = Template.bind({});
BackButton.args = {
  icon: "arrowdown",
};

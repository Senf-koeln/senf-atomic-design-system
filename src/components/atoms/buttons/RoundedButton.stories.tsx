/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import RoundedButton from "./RoundedButton";
import { ButtonProps } from "./Button.types";
import Plus from "../../../assets/icons/Plus";

export default {
  title: "Atom/RoundedButton",
  component: RoundedButton,
  argTypes: {},
} as Meta<typeof RoundedButton>;

const Template: Story<ButtonProps> = (args) => <RoundedButton {...args} />;

export const AddButton = Template.bind({});
AddButton.args = {
  icon: <Plus color="rgb(226,183,54)" transform="scale(1.5)" />,

  size: "big",
};

export const AddButtonYellow = Template.bind({});
AddButtonYellow.args = {
  variant: "primary",
  icon: "plus",
  size: "big",
  color: "white",
};

export const BackButton = Template.bind({});
BackButton.args = {
  icon: "arrow",
};

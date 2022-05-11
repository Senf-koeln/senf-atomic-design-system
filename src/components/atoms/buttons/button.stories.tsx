/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const IconText = Template.bind({});
IconText.args = {
  icon: "check",
  variant: "primary",
  text: "Primary",
};

export const BigIconText = Template.bind({});
BigIconText.args = {
  icon: "search",
  variant: "primary",
  text: "Primary",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: "Primary",
};

export const PrimaryWhite = Template.bind({});
PrimaryWhite.args = {
  variant: "white",
  text: "Primary White",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",

  text: "Secondary",
};

export const SecondaryDashed = Template.bind({});
SecondaryDashed.args = {
  variant: "secondary",
  borderStyle: "dashed",
  text: "Secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Disabled",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: "bulb",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Small",
};

export const SmallIcon = Template.bind({});
SmallIcon.args = {
  icon: "check",
  size: "small",
  text: "Small",
};

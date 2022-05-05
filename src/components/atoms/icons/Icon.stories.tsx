/** @format */
import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon from "./Icon";
import { IconProps } from "./Icon.types";

export default {
  title: "Atom/Icon",
  component: Icon,
} as Meta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Dot = Template.bind({});
Dot.args = {
  icon: "dot",
};

export const Plus = Template.bind({});
Plus.args = {
  icon: "plus",
  color: "#fed957",
};

export const Check = Template.bind({});
Check.args = {
  icon: "check",
};

export const Arrow = Template.bind({});
Arrow.args = {
  icon: "arrow",
};
export const Search = Template.bind({});
Search.args = {
  icon: "search",
};

export const Bulb = Template.bind({});
Bulb.args = {
  icon: "bulb",
};

export const Stats = Template.bind({});
Stats.args = {
  icon: "stats",
};

export const InfoFill = Template.bind({});
InfoFill.args = {
  icon: "infoFill",
};

export const Info = Template.bind({});
Info.args = {
  icon: "info",
};

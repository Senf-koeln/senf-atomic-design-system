/** @format */
import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon from "./Icon";
import { IconProps } from "./Icon.types";

export default {
  title: "Atom/Icon",
  component: Icon,
};
// as Meta<typeof Input>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  icon: "arrowdown",
  color: "black",
};

// export const ArrowUp = Template.bind({});
// ArrowUp.args = {
//   icon: "arrowup",
//   color: "black",
// };
// export const ArrowLeft = Template.bind({});
// ArrowLeft.args = {
//   icon: "arrowleft",
//   color: "black",
// };
// export const ArrowRight = Template.bind({});
// ArrowRight.args = {
//   icon: "arrowright",
//   color: "black",
// };

export const Search = Template.bind({});
Search.args = {
  icon: "search",
  color: "black",
};
export const Bulb = Template.bind({});
Bulb.args = {
  icon: "bulb",
  color: "black",
};

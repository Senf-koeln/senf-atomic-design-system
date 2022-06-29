/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ContentDropdownItem from "./ContentDropdownItem";

import { ContentDropdownItemProps } from "./ContentDropdownItem.types";

export default {
  title: "Atom/ContentDropdownItem",
  component: ContentDropdownItem,
  argTypes: {},
} as Meta<typeof ContentDropdownItem>;

const Template: Story<ContentDropdownItemProps> = (args) => (
  <ContentDropdownItem {...args} />
);

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  text: "Option",
  type: "withoutIcon",
};

export const WithoutIconChecked = Template.bind({});
WithoutIconChecked.args = {
  text: "Option",
  type: "withoutIcon",
  checked: true,
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  text: "Option",
  type: "checkbox",
};

export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
  text: "Option",
  type: "checkbox",
  checked: true,
};

export const Check = Template.bind({});
Check.args = {
  text: "Option",
  type: "check",
};

export const CheckChecked = Template.bind({});
CheckChecked.args = {
  text: "Option",
  type: "check",
  checked: true,
};

export const Radio = Template.bind({});
Radio.args = {
  text: "Option",
  type: "radio",
};

export const RadioChecked = Template.bind({});
RadioChecked.args = {
  text: "Option",
  type: "radio",
  checked: true,
};

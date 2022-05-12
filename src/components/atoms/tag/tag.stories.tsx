/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import Tag from "./Tag";
import { TagProps } from "./Tag.types";

export default {
  title: "Atom/Tag",
  component: Tag,
  argTypes: {},
} as Meta<typeof Tag>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const ActiveState = Template.bind({});
ActiveState.args = {
  icon: "all-topics",
  variant: "white",
  text: "All",
  active: true,
};

export const AllTopics = Template.bind({});
AllTopics.args = {
  icon: "all-topics",
  variant: "white",
  text: "All",
};

export const Topic = Template.bind({});
Topic.args = {
  icon: "dot",
  iconColor: "#5781fe",
  variant: "white",
  text: "Rad",
};

export const OrganizationType = Template.bind({});
OrganizationType.args = {
  icon: "Vereine",
  variant: "white",
  text: "Vereine",
};

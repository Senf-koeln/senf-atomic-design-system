/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import TagSlide from "./TagSlide";

import { TagSlideProps } from "./TagSlide.types";

export default {
  title: "Molecules/TagSlide",
  component: TagSlide,
  argTypes: {},
} as Meta<typeof TagSlide>;

const Template: Story<TagSlideProps> = (args) => <TagSlide {...args} />;

export const Topics = Template.bind({});
Topics.args = {
  selectedTopics: ["Versorgung"],
  placing: "list",
  type: "topics",
};

export const OrganizationTypes = Template.bind({});
OrganizationTypes.args = {
  selectedOrganizationTypes: ["Vereine"],
  placing: "list",
  type: "organizationTypes",
};

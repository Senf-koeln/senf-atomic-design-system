/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Toolbar from "./Toolbar";

import { ToolbarProps } from "./Toolbar.types";
import { useTranslation } from "react-i18next";

export default {
  title: "Molecules/Toolbar",
  component: Toolbar,
  argTypes: {},
} as Meta<typeof Toolbar>;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const IdeaList = Template.bind({});
IdeaList.args = {
  activeSortOptionLabel: "Neuste zuerst",
  sortOptions: [
    { name: "newest", label: "newest_ideas" },
    { name: "hottest", label: "hottest_ideas" },
  ],
  statusOptions: [
    { name: "Unprocessed", label: "unprocessed" },
    { name: "Accepted", label: "accepted" },
    { name: "Planning", label: "planning" },
    { name: "Implemented", label: "implemented" },
    { name: "Rejected", label: "rejected" },
  ],
};

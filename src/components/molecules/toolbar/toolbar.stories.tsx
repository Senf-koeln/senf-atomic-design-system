/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Toolbar from "./Toolbar";

import { ToolbarProps } from "./Toolbar.types";

export default {
  title: "Molecules/Toolbar",
  component: Toolbar,
  argTypes: {},
} as Meta<typeof Toolbar>;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortOptions={[
    { name: "newest", label: t("newest_ideas") },
    { name: "hottest", label: t("hottest_ideas") },
  ]}
  statusOptions={[
    { name: "Unprocessed", label: t("unprocessed") },
    { name: "Accepted", label: t("accepted") },
    { name: "Planning", label: t("planning") },
    { name: "Implemented", label: t("implemented") },
    { name: "Rejected", label: t("rejected") },
  ]}
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import StatisticsOverview from "./StatisticsOverview";

import { StatisticsOverviewProps } from "./StatisticsOverview.types";

export default {
  title: "Pages/StatisticsOverview",
  component: StatisticsOverview,
  argTypes: {},
} as Meta<typeof StatisticsOverview>;

const Template: Story<StatisticsOverviewProps> = (args) => (
  <StatisticsOverview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  openStatisticsOverview: true,
  setOpenStatisticsOverview: () => {},
};

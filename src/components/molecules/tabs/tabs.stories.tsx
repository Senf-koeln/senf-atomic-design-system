/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import MainSwipeListTabs from "./MainSwipeListTabs";

import { MainSwipeListTabsProps } from "./MainSwipeListTabs.types";
import Tabs from "./Tabs";
import { TabsProps } from "./Tabs.types";
import Bulb from "../../../assets/icons/Bulb";

export default {
  title: "Molecules/Tabs",
  component: MainSwipeListTabs,
  argTypes: {},
} as Meta<typeof MainSwipeListTabs>;

const TabsTemplate: Story<TabsProps> = (args) => <Tabs {...args} />;

const MainSwipeListTabsTemplate: Story<MainSwipeListTabsProps> = (args) => (
  <MainSwipeListTabs {...args} />
);

export const DefaultTabs = TabsTemplate.bind({});
DefaultTabs.args = {
  order: 0,
  tabs: [
    { icon: <Bulb />, text: "Beschreibung" },
    { icon: <Bulb />, text: "Status" },
    { icon: <Bulb />, text: "Statistiken" },
  ],
};

export const MainTabs = MainSwipeListTabsTemplate.bind({});
MainTabs.args = {
  order: "ideas",
  text: "x",
};

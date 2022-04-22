/** @format */
import React from "react";
import { Story, Meta } from "@storybook/react";
import Loader from "./Loader";
import { LoaderProps } from "./Loader.types";

export default {
  title: "Atom/Loader",
  component: Loader,
} as Meta<typeof Loader>;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const MainLoader = Template.bind({});
MainLoader.args = {
  loading: true,
  width: "200px",
  height: "200px",
};

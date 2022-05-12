/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ImagePlaceholder from "./ImagePlaceholder";

import { ImagePlaceholderProps } from "./ImagePlaceholder.types";

export default {
  title: "Atom/ImagePlaceholder",
  component: ImagePlaceholder,
  argTypes: {},
} as Meta<typeof ImagePlaceholder>;

const Template: Story<ImagePlaceholderProps> = (args) => (
  <ImagePlaceholder {...args} />
);

export const Image = Template.bind({});
Image.args = {
  img: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
};

export const ImageWithPlaceholder = Template.bind({});
ImageWithPlaceholder.args = {};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ContentDropdown from "./ContentDropdown";

import { ContentDropdownProps } from "./ContentDropdown.types";
import TertiaryButton from "../buttons/TertiaryButton";
import Button from "../buttons/Button";
import Box from "../box/Box";

export default {
  title: "Atom/ContentDropdown",
  component: ContentDropdown,
  argTypes: {},
} as Meta<typeof ContentDropdown>;

const Template: Story<ContentDropdownProps> = (args) => (
  <ContentDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  OpenButton: Button,
  Content: (
    <div>
      Deutsch <br />
      Englisch
    </div>
  ),
};

export const Language = Template.bind({});
Language.args = {
  open: true,
  OpenButton: Button,
  Content: (
    <Box gap="5px" flexDirection="column">
      <Button variant="primary" size="small" text="🇩🇪 Deutsch" />
      <Button size="small" variant="secondary" text="🇬🇧 English" />
    </Box>
  ),
};

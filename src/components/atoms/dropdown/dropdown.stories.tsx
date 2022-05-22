/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";
import { animated } from "@react-spring/web";

export default {
  title: "Atom/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default",
  listItems: [
    "🇨🇳  China",
    "🇮🇳  India",
    "🇺🇸  United States",
    "🇮🇩  Indonesia",
    "🇧🇷  Brazil",
    "🇳🇪  Nigeria",
    "🇧🇩  Bangladesh",
    "🇷🇺  Russia",
    "🇲🇽  Mexico",
    "🇯🇵  Japan",
    "🇪🇹  Ethiopia",
    "🇵🇭  Philippines",
    "🇪🇬  Egypt",
    "🇻🇳  Vietnam",
    "🇨🇩  Congo",
    "🇹🇷  Turkey",
    "🇮🇷  Iran",
    "🇩🇪  Germany",
    "🇹🇭  Thailand",
    "🇬🇧  United Kingdom",
    "🇫🇷  France",
    "🇮🇹  Italy",
    "🇹🇿  Tanzania",
    "🇿🇦  South Africa",
  ],
};
export const DefaultWithLabelAndNote = Default.bind({});
DefaultWithLabelAndNote.args = {
  id: Default.args.id,
  label: "Land",
  note: "A note for extra info",
  listItems: Default.args.listItems,
};

export const Andrede = Template.bind({});
Andrede.args = {
  id: "Andrede",
  listItems: ["Mr.", "Mrs.", "Miss", "Ms.", "Dr.", "Prof.", "Rev."],
};

export const Gender = Template.bind({});
Gender.args = {
  id: "Gender",
  listItems: ["Non-binary", "Female", "Male"],
};

export const MultiDropdowns = Template.bind({});
MultiDropdowns.args = {
  id: "MultiDropdowns",
  label: "Label",
  note: "A note for extra info",
  multi: true,
  listItems: [
    ["Non-binary", "Female", "Male"],
    ["Non-binary", "Female", "Male"],
    ["Non-binary", "Female", "Male"],
  ],
};

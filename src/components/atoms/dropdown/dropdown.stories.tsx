/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Atom/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default",
  listItems: {country: [
    { label: "🇨🇳  China", value: "China" },
    { label: "🇮🇳  India", value: "India" },
    { label: "🇺🇸  United States", value: "United States" },
    { label: "🇮🇩  Indonesia", value: "Indonesia" },
    { label: "🇧🇷  Brazil", value: "Brazil" },
    { label: "🇳🇪  Nigeria", value: "Nigeria" },
    { label: "🇧🇩  Bangladesh", value: "Bangladesh" },
    { label: "🇷🇺  Russia", value: "Russia" },
    { label: "🇲🇽  Mexico", value: "Mexico" },
    { label: "🇯🇵  Japan", value: "Japan" },
    { label: "🇪🇹  Ethiopia", value: "Ethiopia" },
    { label: "🇵🇭  Philippines", value: "Philippines" },
    { label: "🇪🇬  Egypt", value: "Egypt" },
    { label: "🇻🇳  Vietnam", value: "Vietnam" },
    { label: "🇨🇩  Congo", value: "Congo" },
    { label: "🇹🇷  Turkey", value: "Turkey" },
    { label: "🇮🇷  Iran", value: "Iran" },
    { label: "🇩🇪  Germany", value: "Germany" },
    { label: "🇹🇭  Thailand", value: "Thailand" },
    { label: "🇬🇧  United Kingdom", value: "United Kingdom" },
    { label: "🇫🇷  France", value: "France" },
    { label: "🇮🇹  Italy", value: "Italy" },
    { label: "🇹🇿  Tanzania", value: "Tanzania" },
    { label: "🇿🇦  South Africa", value: "South Africa" },
  ]},
  recieveValue(value) {
    console.log(value);
  },
};
export const DefaultWithLabelAndNote = Default.bind({});
DefaultWithLabelAndNote.args = {
  id: Default.args.id,
  label: "Land",
  note: "A note for extra info",
  listItems: Default.args.listItems,
  recieveValue(value) {
    console.log(value)
  }
};

export const Andrede = Template.bind({});
Andrede.args = {
  id: "Andrede",
  listItems: {Andrede: ["Mr.", "Mrs.", "Miss", "Ms.", "Dr.", "Prof.", "Rev."].map(
    (item) => ({ label: item, value: item })
  )},
  recieveValue(value) {
    console.log(value)
  }
};

export const Gender = Template.bind({});
Gender.args = {
  id: "Gender",
  listItems: {Gender: ["Non-binary", "Female", "Male"].map((item) => ({
    label: item,
    value: item,
  }))},
  recieveValue(value) {
    console.log(value);
  }
};

export const MultiDropdowns = Template.bind({});
MultiDropdowns.args = {
  id: "MultiDropdowns",
  label: "Label",
  note: "A note for extra info",
  multi: true,
  placeholder: "please pick a gender!",
  listItems: {
    Gender1: [
      { label: "Non-binary", value: "Non-binary" },
      { label: "Female", value: "Female" },
      { label: "Male", value: "Male" },
    ],
    Gender2: [
      { label: "Non-binary", value: "Non-binary" },
      { label: "Female", value: "Female" },
      { label: "Male", value: "Female" },
    ],
    Gender3: [
      { label: "Non-binary", value: "Non-binary" },
      { label: "Female", value: "Female" },
      { label: "Male", value: "Female" },
    ],
  },
  recieveValue(value) {
    console.log(value);
    
  }
};

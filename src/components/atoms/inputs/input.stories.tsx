/** @format */
import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "./Input";
import { InputProps } from "./Input.types";

export default {
  title: "Atom/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Name",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  placeholder: "Name",
  label: "Label"
};

export const WithNote = Template.bind({});
WithNote.args = {
  placeholder: "Name",
  label: "Label",
  note: "A note for extra info"
};

export const Required = Template.bind({});
Required.args = {
  label: "Label & Note",
  note: "a note for extra info",
  placeholder: "Name",
};

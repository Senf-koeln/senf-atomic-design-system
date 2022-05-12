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
  label: "Required",
  note: "a note for extra info",
  placeholder: "Name",
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "disabled",
  note: "a note for extra info",
  placeholder: "Name",
  disabled: true
};

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  note: "Error message",
  placeholder: "Name",
  error: true
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  placeholder: "Password",
  type: "password"
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: "Text Area",
  note: "a note for extra info",
  placeholder: "Enter your message here",
  type: "textarea",
  columns: 28,
  rows: 12
};


export const Search = Template.bind({});
Search.args = {
  type: "search",
};
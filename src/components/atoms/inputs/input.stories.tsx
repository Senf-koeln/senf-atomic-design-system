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

export const Filled = Template.bind({});
Filled.args = {
  value: "Some value already in here",
};

export const Label = Template.bind({});
Label.args = {
  label: "Label",
  placeholder: "Name",
};

export const LabelNote = Template.bind({});
LabelNote.args = {
  label: "Label & Note",
  note: "a note for extra info",
  placeholder: "Name",
};

export const Required = Template.bind({});
Required.args = {
  label: "Required",
  required: true,
  note: "a note for extra info",
  placeholder: "Name",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Required",
  note: "a note for extra info",
  placeholder: "Name",
  disabled: true,
};

// export const Success = Template.bind({});
// Success.args = {
//   disabled: false,
//   label: "Success",
// };

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  label: "Error",
  note: "a note for extra info",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Enter password",
  type: "password",
};

export const Search = Template.bind({});
Search.args = {
  placeholder: "Search...",
  type: "search",
};

// export const TextArea = Template.bind({});
// TextArea.args = {
//   label: "Textarea",
//   note: "a note for extra info",
//   placeholder: "Enter your message",
//   rows="5"
// };

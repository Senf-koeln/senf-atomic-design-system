/** @format */

import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Inputs",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = { placeholder: "Email", type: "email" };

export const Label = Template.bind({});
Label.args = {
  label: "Label",
  placeholder: "Name",
  type: "text",
};

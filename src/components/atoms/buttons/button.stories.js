/** @format */

import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: "Submit",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Submit",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Submit",
};

// import React from "react";
// import { storiesOf } from "@storybook/react";
// import { Button } from ".";

// const stories = storiesOf("App Test", module);

// stories.add("App", () => {
//   return <Button />;
// });

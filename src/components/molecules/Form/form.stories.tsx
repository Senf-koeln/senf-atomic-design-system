/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import Form from "./Form";
import { FormProps } from "./Form.types";

export default {
  title: "Molecules/Form",
  component: Form,
} as Meta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const LoginForm = Template.bind({});
LoginForm.args = {
  inputItems: [
    { name: "email", type: "email", placeholder: "E-Mail" },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ],
};

export const RegisterForm = Template.bind({});
RegisterForm.args = {
  inputItems: [
    { name: "email", type: "email", placeholder: "E-Mail" },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
    {
      name: "username",
      type: "username",
      placeholder: "Username",
    },
    {
      name: "gender",
      type: "gender",
      placeholder: "Gender",
    },
    {
      name: "age",
      type: "age",
      placeholder: "Age",
    },
  ],
};

export const RegisterProjectroomSetTitle = Template.bind({});
RegisterProjectroomSetTitle.args = {
  inputItems: [
    {
      name: "title",
      type: "title",
      placeholder: "Title",
      label: "Title of your Projectroom",
      note: "Set an appealing and descriptive title",
    },
  ],
};

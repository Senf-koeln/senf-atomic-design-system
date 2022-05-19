/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Dialog from "./Dialog";

import { DialogProps } from "./Dialog.types";
import Accordion from "../accordion/Accordion";
import SubNavbar from "../navs/SubNavbar";

export default {
  title: "Molecules/Dialog",
  component: Dialog,
  argTypes: {},
} as Meta<typeof Dialog>;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const LeftDialog = Template.bind({});
LeftDialog.args = {
  openDialog: true,
  left: "0px",
  children: (
    <React.Fragment>
      <SubNavbar
        iconLeft="arrow"
        header="FAQ"
        iconRight="plus"
        iconRightTransform="rotate(45deg)"
      />
    </React.Fragment>
  ),
};

export const ComponentsDialog = Template.bind({});
ComponentsDialog.args = {
  openDialog: true,
  left: "200px",
  children: (
    <React.Fragment>
      <SubNavbar
        iconLeft="arrow"
        header="FAQ"
        iconRight="plus"
        iconRightTransform="rotate(45deg)"
      />
    </React.Fragment>
  ),
};

export const RightDialog = Template.bind({});
RightDialog.args = {
  openDialog: true,
  right: "0px",
  children: (
    <React.Fragment>
      <SubNavbar
        iconLeft="arrow"
        header="FAQ"
        iconRight="plus"
        iconRightTransform="rotate(45deg)"
      />
    </React.Fragment>
  ),
};

export const FullDialog = Template.bind({});
FullDialog.args = {
  openDialog: true,
  size: "xxl",
  left: "0px",
  children: (
    <React.Fragment>
      <SubNavbar
        iconLeft="arrow"
        header="FAQ"
        iconRight="plus"
        iconRightTransform="rotate(45deg)"
      />
    </React.Fragment>
  ),
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Modal from "./Modal";

import { ModalProps } from "./Modal.types";
import Accordion from "../accordion/Accordion";
import SubNavbar from "../navs/SubNavbar";

export default {
  title: "Molecules/Modal",
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  openModal: true,
  children: (
    <React.Fragment>
      <SubNavbar
        iconLeft="arrow"
        header="FAQ"
        iconRight="plus"
        iconRightTransform="rotate(45deg)"
      />
      <Accordion
        data={[
          {
            header: "What happens to the ideas?",
            body: "The ideas received are submitted to the city administration by the urban planners:inside from our team, through which we have entered into a constructive dialogue with the administration on how the ideas can be implemented in the processes. As an interface between the citizens and the city administration, we bring the results of the applications to the public via Instagram. The first requests have already been included in the planning. For example, one of the most popular streets in Cologne, Zülpicher Straße, is to become car-free in a central section. It is particularly pleasing to see that our publications of feedback from the respective offices via our Instagram channel are also welcomed by users, even if with negative results. On the part of the Bürger:innen and the administration, it has already been expressed that we are using Senf.koeln to ensure greater understanding and closer partnership and transparent communication on both sides.",
          },
          {
            header: "What happens when the header is a super long text",
            body: "body",
          },
          { header: "header", body: "body" },
          { header: "header", body: "body" },
          { header: "header", body: "body" },
        ]}
      />
    </React.Fragment>
  ),
};

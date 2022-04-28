/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import OrganizationCard from "./OrganizationCard";

import { OrganizationCardProps } from "./OrganizationCard.types";

export default {
  title: "Molecules/OrganizationCard",
  component: OrganizationCard,
  argTypes: {},
} as Meta<typeof OrganizationCard>;

const Template: Story<OrganizationCardProps> = (args) => (
  <OrganizationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Organization X",
  projectRoomsSize: 2,
  organizationType: "Stadtverwaltung",
  img: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
};

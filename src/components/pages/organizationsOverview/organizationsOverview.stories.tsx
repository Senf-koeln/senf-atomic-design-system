/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import OrganizationsOverview from "./OrganizationsOverview";

import { OrganizationsOverviewProps } from "./OrganizationsOverview.types";

export default {
  title: "Pages/OrganizationsOverview",
  component: OrganizationsOverview,
  argTypes: {},
} as Meta<typeof OrganizationsOverview>;

const Template: Story<OrganizationsOverviewProps> = (args) => (
  <OrganizationsOverview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checkedSortOption: "aToZ",
  openOrganizationsOverview: true,
  setOpenOrganizationsOverview: () => {},
  selectedOrganizationTypes: ["Vereine"],
  data: [
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      latitude: null,
      description: "asdlkasdasd askjhdhaskjdhaskkd",
      createdAt: "2022-03-23T15:36:09.859Z",
      weblink: "",
      contact: "",
      userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
      faqs: null,
      title: "Tazy's organisation",
      status: "active",
      longitude: null,
      address: null,
      organizationType: "Vereine",
      organizationId: "HNgqF5rjKfdjb7GxaPuK",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
  ],
};

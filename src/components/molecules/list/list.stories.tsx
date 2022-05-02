/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import List from "./List";

import { ListProps } from "./List.types";

export default {
  title: "Molecules/List",
  component: List,
  argTypes: {},
} as Meta<typeof List>;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const IdeaList = Template.bind({});
IdeaList.args = {
  dataFinal: [
    {
      screamId: "omweqsDYlFMkmTFAX1Ba",
      lat: 50.96734458192481,
      long: 7.00181320821256,
      title: "Straßenfest an der Wallstraße",
      body: "Vom Abschnitt Ecke Wallstr. bis Springbrunnen wird geplant ein Straßenfest zu veranstalten. Wohnst du in der Straße und willst deine Nachbar:innen ken",
      createdAt: "2021-07-12T11:10:22.413Z",
      commentCount: 0,
      likeCount: 1,
      status: "None",
      Thema: "Sport / Freizeit",
      Stadtteil: "Mülheim",
      color: "#f6c095",
      locationHeader: "Mülheimer Freiheit 142",
    },
    {
      screamId: "omweqsDYlFMkmTFAX1Ba",
      lat: 50.96734458192481,
      long: 7.00181320821256,
      title: "Straßenfest an der Wallstraße",
      body: "Vom Abschnitt Ecke Wallstr. bis Springbrunnen wird geplant ein Straßenfest zu veranstalten. Wohnst du in der Straße und willst deine Nachbar:innen ken",
      createdAt: "2021-07-12T11:10:22.413Z",
      commentCount: 0,
      likeCount: 1,
      status: "None",
      Thema: "Sport / Freizeit",
      Stadtteil: "Mülheim",
      color: "#f6c095",
      locationHeader: "Mülheimer Freiheit 142",
    },
  ],
};

export const OrganizationList = Template.bind({});
OrganizationList.args = {
  loading: false,
  swipeListType: "organizationsOverview",
  dataFinal: [
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
    },
  ],
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import OrganizationPage from "./OrganizationPage";

import { OrganizationPageProps } from "./OrganizationPage.types";

export default {
  title: "Pages/OrganizationPage",
  component: OrganizationPage,
  argTypes: {},
} as Meta<typeof OrganizationPage>;

const Template: Story<OrganizationPageProps> = (args) => (
  <OrganizationPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  organization: {
    title: "Essbare Stadt",
    description:
      "Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerise nisl consectetur et. Vestibulum Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitom Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerise nisl consectetur et. Vestibulum Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus blandit tempus porttitom Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerise nisl consectetur et. Vestibulum Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus urabitur blandit tempus porttitom",
    organizationType: "Vereine",
    contact: "max@mail.de",
    faqs: [
      { header: "xxx", body: "xxx" },
      { header: "xxx", body: "xxx" },
      { header: "xxx", body: "xxx" },
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2F562az529HNj8CIKKE6JL%2Flogo%2Flogo?alt=media&token=a85fa435-5eeb-4a20-ae8a-b872d0571639",
  },
  data: [
    {
      projectRoomId: "lvbqMZp0bYbedrsQOSfv",
      title: "This is a projectroomcard",
      brief:
        "Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerise nisl consectetur et.",
      createdAt: "2022-04-16T10:56:01.370Z",
      status: "active",
      geoData:
        '{"type":"FeatureCollection","features":[{"id":"458f679b3066cc9e75c2973ef81f38d9","type":"Feature","properties":{},"geometry":{"coordinates":[[[6.933078066975327,50.93706925894358],[6.902495072399319,50.8853410139935],[7.001525721501622,50.88687226076479],[7.00006938842651,50.9382928996971],[6.933078066975327,50.93706925894358]]],"type":"Polygon"}}]}',
      centerLat: 50.9118169568453,
      centerLong: 6.95201039695047,
      zoom: 12.5,
      calendar: false,
      organizationId: "3GWHwdcjiloHeDxU1r2K",
      organizationType: "Vereine",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
    {
      projectRoomId: "lvbqMZp0bYbedrsQOSfv",
      title: "This is a projectroomcard with a really really long title",
      brief:
        "Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerise nisl consectetur et.",
      createdAt: "2022-04-16T10:56:01.370Z",
      status: "active",
      geoData:
        '{"type":"FeatureCollection","features":[{"id":"458f679b3066cc9e75c2973ef81f38d9","type":"Feature","properties":{},"geometry":{"coordinates":[[[6.933078066975327,50.93706925894358],[6.902495072399319,50.8853410139935],[7.001525721501622,50.88687226076479],[7.00006938842651,50.9382928996971],[6.933078066975327,50.93706925894358]]],"type":"Polygon"}}]}',
      centerLat: 50.9118169568453,
      centerLong: 6.95201039695047,
      zoom: 12.5,
      calendar: false,
      organizationId: "3GWHwdcjiloHeDxU1r2K",
      organizationType: "Vereine",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
    },
  ],
};

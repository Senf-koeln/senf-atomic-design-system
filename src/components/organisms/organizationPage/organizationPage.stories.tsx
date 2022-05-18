/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import OrganizationPage from "./OrganizationPage";

import { OrganizationPageProps } from "./OrganizationPage.types";

export default {
  title: "Organisms/OrganizationPage",
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
      { question: "xxx", answer: "xxx" },
      { question: "xxx", answer: "xxx" },
      { question: "xxx", answer: "xxx" },
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2F562az529HNj8CIKKE6JL%2Flogo%2Flogo?alt=media&token=a85fa435-5eeb-4a20-ae8a-b872d0571639",
  },
};

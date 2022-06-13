/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ProfilePage from "./ProfilePage";

import { ProfilePageProps } from "./ProfilePage.types";

export default {
  title: "Pages/ProfilePage",
  component: ProfilePage,
  argTypes: {},
} as Meta<typeof ProfilePage>;

const ProfilePageTemplate: Story<ProfilePageProps> = (args) => (
  <ProfilePage {...args} />
);

export const Profile = ProfilePageTemplate.bind({});
Profile.args = {
  data: {},
};

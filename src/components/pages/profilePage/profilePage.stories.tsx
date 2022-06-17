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
  user: {
    isAdmin: true,
    createdAt: "2021-06-20T11:11:06.950Z",
    isOrgModerator: true,
    userId: "qkbwKh9DT3h4h6yPsH8D7GqYRXC3",
    organizationId: ["7neEcENX16eIw4baKwXC", "dlLtQlMS2xmyA5R2oQkb"],
    sex: "",
    handle: "Senf.koeln",
    description: null,
    isSuperAdmin: true,
    photoUrl:
      "https://lh3.googleusercontent.com/a-/AOh14Gg6A5t4OFiEGKReXCl3mcJ5-DN2gm0nMpscWRdA2g=s96-c",
    age: "",
    screams: [
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
    likes: [
      {
        age: "",
        sex: "",
        screamId: "wr3XdNPb4BnbvOcOeocm",
        userId: "qkbwKh9DT3h4h6yPsH8D7GqYRXC3",
        Thema: "Verkehr",
        userHandle: "Senf.koeln",
        createdAt: "2021-11-08T10:11:54.882Z",
      },
      {
        sex: "",
        userId: "qkbwKh9DT3h4h6yPsH8D7GqYRXC3",
        Thema: "Sonstige",
        createdAt: "2022-02-22T14:04:21.933Z",
        screamId: "BnNvYiDJKNzxQY6OWSkG",
        userHandle: "Senf.koeln",
        age: "",
      },
    ],
  },
};

/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import IdeaDetailPage from "./IdeaDetailPage";

import { IdeaDetailPageProps } from "./IdeaDetailPage.types";

export default {
  title: "Pages/IdeaDetailPage",
  component: IdeaDetailPage,
  argTypes: {},
} as Meta<typeof IdeaDetailPage>;

const IdeaDetailCardTemplate: Story<IdeaDetailPageProps> = (args) => (
  <IdeaDetailPage {...args} />
);

export const IdeaDetail = IdeaDetailCardTemplate.bind({});
IdeaDetail.args = {
  data: {
    district: "Berliner Str. 20, 51063 Köln, Germany",
    title: "Workshop für Mülheimer Vereine",
    Stadtbezirk: "Mülheim",
    Thema: "Sonstige",
    commentCount: 2,
    locationHeader: "Berliner Str. 20",
    long: 7.008632381767962,
    project: "Agora:_Sommer_des_guten_lebens",
    body: "Der Mülheimer Sommer 2021 ist das was du / was ihr draus macht! Hast du schon Ideen für eine Aktion und weißt noch nicht wie du sie mit deinem Verein umsetzen kannst? Oder möchtest du eine Aktion mit deinem Verein machen, weißt aber noch nicht so genau welche? Dann melde dich bei uns an! \n\nIm Workshop tauschen wir uns über erste, eigene Ideen aus und besprechen Ansätze der Umsetzung. Du kannst dich anhand von zahlreichen Aktions-Beispielen inspirieren lassen und (d)einen ersten Prototyp für deine Aktion gestalten. Wir unterstützen uns dabei alle gegenseitig, geben Feedback und Anregungen.\n\nDie Workshops sind inhaltlich ähnlich gestaltet und bauen nicht aufeinander auf. \n",
    projectroomId: "ibFnQKlsEBr97usS9nKD",
    userId: "5p3Mgw0rb2PeyrKI8Vxp2X65d7i2",
    lat: 50.96983082081014,
    age: 32,
    contact: "muelheim@agorakoeln.de",
    weblinkTitle: "Sommer des guten Lebens Mülheim",
    Stadtteil: "Mülheim",
    polarity: 0,
    weblink: "https://www.tagdesgutenlebens.de",
    status: "None",
    subjectivity: 0,
    color: "#f9db95",
    likeCount: 2,
    userHandle: "Nina - Veedelsteam",
    createdAt: "2021-07-22T12:18:11.851Z",
    selectedUnix: [1627403441, 1627662641],
    sex: "female",
    screamId: "zpEvKmY7SJGz4vRNe3IC",
    comments: [
      {
        createdAt: "2021-07-26T21:05:14.753Z",
        age: 54,
        Thema: "Sonstige",
        userId: "qVeW83HfmEN0SXDUei0P5N0mjOL2",
        screamId: "zpEvKmY7SJGz4vRNe3IC",
        userHandle: "Martin_h",
        title: "Das ist eine wunderbare Idee!",
        sex: "male",
        commentId: "TkmomItAQjF8rLZQzZqY",
      },
      {
        screamId: "zpEvKmY7SJGz4vRNe3IC",
        userHandle: "JuliaF",
        createdAt: "2021-07-26T21:05:17.208Z",
        userId: "qVeW83HfmEN0SXDUei0P5N0mjOL2",
        Thema: "Sonstige",
        title: "Finde ich auuch! Hammer",
        sex: "male",
        age: 54,
        commentId: "R1MV88jmYZyeXzztR0wt",
      },
      {
        screamId: "zpEvKmY7SJGz4vRNe3IC",
        userHandle: "JuliaF",
        createdAt: "2021-07-26T21:05:17.208Z",
        userId: "qVeW83HfmEN0SXDUei0P5N0mjOL2",
        Thema: "Sonstige",
        title: "Finde ich auuch! Hammer",
        sex: "male",
        age: 54,
        commentId: "R1MV88jmYZyeXzztR0wt",
      },
      {
        screamId: "zpEvKmY7SJGz4vRNe3IC",
        userHandle: "JuliaF",
        createdAt: "2021-07-26T21:05:17.208Z",
        userId: "qVeW83HfmEN0SXDUei0P5N0mjOL2",
        Thema: "Sonstige",
        title: "Finde ich auuch! Hammer",
        sex: "male",
        age: 54,
        commentId: "R1MV88jmYZyeXzztR0wt",
      },
      {
        screamId: "zpEvKmY7SJGz4vRNe3IC",
        userHandle: "JuliaF",
        createdAt: "2021-07-26T21:05:17.208Z",
        userId: "qVeW83HfmEN0SXDUei0P5N0mjOL2",
        Thema: "Sonstige",
        title: "Finde ich auuch! Hammer",
        sex: "male",
        age: 54,
        commentId: "R1MV88jmYZyeXzztR0wt",
      },
    ],
  },
};

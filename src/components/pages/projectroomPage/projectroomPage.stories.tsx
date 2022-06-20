/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import ProjectroomPage from "./ProjectroomPage";

import { ProjectroomPageProps } from "./ProjectroomPage.types";

export default {
  title: "Pages/ProjectroomPage",
  component: ProjectroomPage,
  argTypes: {},
} as Meta<typeof ProjectroomPage>;

const ProjectroomPageTemplate: Story<ProjectroomPageProps> = (args) => (
  <ProjectroomPage {...args} />
);

export const Projectroom = ProjectroomPageTemplate.bind({});
Projectroom.args = {
  data: {
    logoURL:
      "https://firebasestorage.googleapis.com/v0/b/senf-prod.appspot.com/o/organizationsData%2FXaZl7rCTh5PVQKE4hQvj%2FRHeBEXczxNIE5RsF4JG9%2Fthumbnail?alt=media&token=889689e4-7fad-484c-a343-7ddf45b5cc39",
    weblinkTitle: "Offener Brief",
    createdAt: "2022-02-14T14:43:00.958Z",
    organizationId: "XaZl7rCTh5PVQKE4hQvj",
    zoom: 17,
    centerLong: 6.941211826858762,
    owner: "United Eifelwall",
    projectRoomId: "RHeBEXczxNIE5RsF4JG9",
    geoData:
      '{"type":"FeatureCollection","features":[{"id":"9a44a6b844f74745a296eefe4dced979","type":"Feature","properties":{},"geometry":{"coordinates":[[[6.940460066328626,50.92316119587858],[6.94034160709279,50.92296589892973],[6.941954475141102,50.92195493691344],[6.9420820466247335,50.92204684345916],[6.940460066328626,50.92316119587858]]],"type":"Polygon"}}]}',
    description_about:
      "unseren Eifelwall! Seit ein Teil des Eifelwalls autofrei ist, entfaltete sich dort das Leben. Er wurde immer lebendiger und von vielen unterschiedlichen Menschen und Gruppen genutzt und wurde so zu einem Begegnungs- und Aktivort, der frei, selbstverwaltet und unkommerziell war.",
    contact: null,
    status: "active",
    contactTitle: null,
    description_procedure:
      "den Ort zu einem spannenden Reallabor aufblühen lassen, der zeigt, wie sich eine Stadt mit Wünschen der Bürger:innen entwickeln lässt. ",
    weblink:
      "https://firebasestorage.googleapis.com/v0/b/senf-prod.appspot.com/o/2021-10-31_O%CC%88ffentlicher%20Raum%20Eifelwall.pdf?alt=media&token=0f54a43b-7b39-4353-88c6-7ee6c171f15c",
    brief:
      "Teilt eure Ideen für den neu entstandenen Raum am Eifelwall und helft dabei, einen lebenswerten Ort entstehen zu lassen.",
    organizationType: "Initiativen",
    description_motivation:
      "es zu zeigen, wie ein öffentlicher Ort von Menschen für Menschen geschaffen und frei gestaltet werden kann, auch wenn die Stadt uns ein paar Steine in den Weg legt. ",
    description_learnmore:
      "schau doch mal in unseren offenen Brief an die Stadt Köln rein! Dort findest du Eindrücke von unseren bisherigen Vorstellungen und auch den frustrierenden Räumungsaktionen des Ordnungsamtes. ",
    title: "Neugestaltung des Eifelwalls  ",
    centerLat: 50.92255806639601,
    screams: [
      {
        sex: "female",
        commentCount: 0,
        likeCount: 5,
        projectRoomId: "RHeBEXczxNIE5RsF4JG9",
        userId: "5YCo7aemL8NaXjEeRfLmICSprMr2",
        createdAt: "2021-11-15T22:58:29.005Z",
        long: 6.941094135901949,
        status: "None",
        body: "werden würde. ",
        project: "UnitedEifelwall:_Neugestaltung_des_Eifelwalls",
        locationHeader: "Eifelwall 1",
        userHandle: "Ming Hätz schläät för Kölle",
        age: 28,
        Thema: "Umwelt und Grün",
        lat: 50.92250431204894,
        title: "Pflanzen",
        Stadtteil: "Neustadt",
        district: "Eifelwall 1, 50674 Köln, Germany",
        screamId: "JRPmVPNI8GsO6IiArOr4",
        color: "#8dd9b8",
      },
    ],
  },
  organizations: [
    {
      address: null,
      faqs: null,
      title: "United Eifelwall",
      description:
        "Seitdem der Eifelwall zwischen der Eifelstraße und der Rudolf-Amelunxen-Straße autofrei ist, wird er immer lebendiger und von vielen unterschiedlichen Menschen und Gruppen täglich in ihrer Freizeit erfahren und gemeinschaftlich – aber trotzdem unabhängig voneinander – genutzt. Es ist ein Begegnungs- und Aktivort, der frei, selbstverwaltet und unkommerziell ist.  ",
      logoURL:
        "https://firebasestorage.googleapis.com/v0/b/senf-prod.appspot.com/o/2021-10-31_O%CC%88ffentlicher%20Raum%20Eifelwall.pdf?alt=media&token=0f54a43b-7b39-4353-88c6-7ee6c171f15c",
      weblink: null,
      contactTitle: null,
      contact: null,
      organizationType: "Initiativen",
      status: "active",
      organizationId: "XaZl7rCTh5PVQKE4hQvj",
      longitude: null,
      latitude: null,
      createdAt: "2022-02-14T14:05:20.049Z",
      weblinkTitle: null,
      userIds: ["qkbwKh9DT3h4h6yPsH8D7GqYRXC3"],
    },
  ],
};

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
  projectroomsData: [
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

export const WithCalendar = Template.bind({});
WithCalendar.args = {
  googleCalendarApiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
  organization: {
    faqs: [
      {
        question: "Was meint „Einmischen“?",
        answer:
          "„Einmischen“ kann auch heißen: mitmachen | teilnehmen | sich beteiligen | sich einschalten | eingreifen | beanstanden | protestieren | kritisieren | vermitteln | ein Wort einlegen für … | Einspruch erheben | intervenieren | mitmischen | mitsprechen | ein Wörtchen mitzureden haben | seine Meinung äußern | neugierig sein | wissen wollen, …\nAlso: Wir verbinden hiermit verschiedensten Formen des im weiteren Sinne politischen bzw. bürgerschaftlichen Engagements für eine gute Sache, gegen schlechte Sachen, für gesellschaftliche Neuerungen u.a.m.\nDas „Einmischen“ ermöglichen ist wesentliches Anliegen des Bereiches „Politische Partizipation“ der Kölner Freiwilligen Agentur (https://www.koeln-freiwillig.de/beteiligen/).",
      },
      {
        question:
          "Was bedeutet „Systematische Öffentlichkeitsbeteiligung“ in Köln?",
        answer:
          "In einem umfassenden Prozess wurden Leitlinien für die „Systematische Öffentlichkeitsbeteiligung“ von Vertreterinnen und Vertretern aus Politik, Verwaltung und nicht zuletzt der Kölner Stadtgesellschaft erarbeitet. Auf dieser Grundlage sind aktuell die Stadtbezirke Kalk, Lindenthal und Nippes sowie die Ratsausschüsse „Klima, Umwelt und Grün“ und „Verkehrsausschuss“ bei allen städtischen Vorhaben, über die sie entscheiden, zugleich auch über die Öffentlichkeitsbeteiligung zu beschließen. Eine Übersicht über die aktuell beschlossenen und stattfindenden Beteiligungsverfahren sind auf dem Beteiligungsportal https://www.meinungfuer.koeln/ zu finden. Hier gibt es auch umfassende Infos zu den Leitlinien.\n\nUnter https://www.koeln-freiwillig.de/mitmachen/oeb/ gibt es jeweils eine aktuelle Übersicht über zur Entscheidung anstehende Vorlagen, bei denen eine Öffentlichkeitsbeteiligung vorgesehen ist oder abgelehnt wird.",
      },
      {
        answer:
          "Wenn du eine für dich, dein Zeitbudget und deine Interessen passende Engagementmöglichkeit suchst, kannst dich hier auf der KFA-Website informieren: https://www.koeln-freiwillig.de/engagementberatung/. Oder du vereinbarst einen persönlichen Beratungstermin.\nWenn du dich für die Verwirklich deiner hier bei senf.koeln eingebrachte Idee engagieren und dazu z.B. eine Initiative gründen willst beraten wir (KFA-Bereich „Politische Partizipation“) dich gerne. Schick uns eine E-Mail (beteiligen@koeln-freiwillig.de) oder nutze unsere in der Regel wöchentlich angebotene offene Online-Sprechstunde: https://www.koeln-freiwillig.de/sprechstunde",
        question: "Wo bzw. wie kann ich mich engagieren?",
      },
      {
        question: "Wie kann ich ein Anliegen auf den Weg bringen?",
        answer:
          "Wenn du eine kleineres oder größeres Anliegen hast, das ein Handeln oder eine Entscheidung vonseiten der Verwaltung oder der Rats- bzw. Bezirkspolitik erfordert, gibt es mehre Möglichkeiten und auch Eskalationsstufen: vom Anruf über eine Petitionen („Anregung“ oder „Beschwerde“) bis hin zum Bürgerentscheid. Eine Übersicht über die rechtlich möglichen und von der Stadt Köln gebotenen Möglichkeiten findest du hier: https://www.stadt-koeln.de/politik-und-verwaltung/mitwirkung/\nWenn du da nicht weiter kommst oder das nicht passt, können wir (KFA-Bereich „Politische Partizipation“) dich gerne beraten. Schick uns eine E-Mail (beteiligen@koeln-freiwillig.de) oder nutze unsere in der Regel wöchentlich angebotene offene Online-Sprechstunde: https://www.koeln-freiwillig.de/sprechstunde",
      },
      {
        answer:
          "Wir, der Bereich „Politische Partizipation“ der Kölner Freiwilligen Agentur, bieten folgende Möglichkeiten der Beratung, Qualifizierung oder auch weiter gehenden Unterstützung an:\n\n- In der Regel 1x wöchentlich eine offene Online-Sprechstunde. https://www.koeln-freiwillig.de/sprechstunde\n\n- Vertiefende Einzelberatungen insbesondere für Initiativen in Gründung. (Terminvereinbarung per E-Mail beteiligen@koeln-freiwillig.de bzw. telefonisch 0221 888 278-16)\n\n- Moderation bei Gründungsversammlungen z.B.\nVertiefende Qualifizierungen zu verschiedenen Aspekten der Initiativearbeit wie: Öffentlichkeitsarbeit, Gewinnung Engagierter, Fundraising / Spendengewinnung, \n\n- Vereinsentwicklung, Aktionen & Kampagnen u.a.m. Eine jeweils aktuelle Übersicht der Angebote ist hier zu finden: https://www.koeln-freiwillig.de/beteiligen/quali-fuer-inis/",
        question:
          "Welche Beratungs- oder Unterstützungsmöglichkeiten gibt es für meine senf-Idee oder Initiative?",
      },
    ],
    createdAt: "2022-03-07T20:11:51.519Z",
    logoURL:
      "https://firebasestorage.googleapis.com/v0/b/senf-prod.appspot.com/o/organizationsData%2Fh3UPecBj7QoHNA6SkYe3%2Flogo%2Flogo?alt=media&token=a7db2686-f816-4d5f-b491-dcac08493925",
    organizationType: "Vereine",
    title: "Kölner Freiwilligen Agentur e.V.",
    googleCalendarId: "rpanecgkom2lsu6jid6db0a6qk@group.calendar.google.com",
    status: "active",
    contactTitle: "E-Mail",
    userIds: [
      "qkbwKh9DT3h4h6yPsH8D7GqYRXC3",
      "sSjkXTPMxmTxHxpmShEyCSTiQh22",
      "UZV51kRqaJTlDeb6iyfjveIgoq53",
    ],
    latitude: null,
    description:
      "Wir wollen erreichen, dass alle Menschen das öffentliche Leben in Köln und eine gute Entwicklung der Stadt mitgestalten und bereichern (können). Hierzu beraten und unterstützen wir Interessierte bei der Suche nach geeigneten Engagementmöglichkeiten oder auch bei der Gründung eigener Initiativen. Unter dem Leitmotiv „Einmischen ist erwünscht und möglich!“ informieren wir über Möglichkeiten der Bürgerbeteiligung, der politischen Teilhabe und wie es gelingen kann, ein Anliegen z.B. für den öffentlichen Raum bzw. das öffentliche Leben Erfolg versprechend auf den Weg zu bringen.",
    address: "Clemensstraße 7, 50676 Köln, Germany",
    contact: "beteiligen@koeln-freiwillig.de",
    longitude: null,
    weblink: "https://www.koeln-freiwillig.de/beteiligen",
    organizationId: "h3UPecBj7QoHNA6SkYe3",
    weblinkTitle: "Website",
    projectRooms: [],
  },
};

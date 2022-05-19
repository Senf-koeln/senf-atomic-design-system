/** @format */

import React from "react";
import { Translation } from "react-i18next";

const topics = [
  {
    name: "Versorgung", //  Care
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_care")}</span>}
      </Translation>
    ),
    color: "#bd98f6",
    infoPageLeft: "-70%",
  },
  {
    name: "Verkehr", //  Traffic
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_traffic")}</span>}
      </Translation>
    ), //  Traffic
    color: "#91dff4",
    infoPageLeft: "170%",
  },
  {
    name: "Umwelt und Grün", //  Environment and Green
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_ecoAndGreen")}</span>}
      </Translation>
    ),
    color: "#8dd9b8",
    infoPageLeft: "-70%",
  },
  {
    name: "Rad", //  Bicycle
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_bike")}</span>}
      </Translation>
    ),
    color: "#929df6",
    infoPageLeft: "120%",
  },
  {
    name: "Inklusion / Soziales", //  Inclusion / Social
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_inclusionAndSocial")}</span>}
      </Translation>
    ),
    color: "#e8907e",
    infoPageLeft: "-70%",
  },
  {
    name: "Sport / Freizeit", //  Sports / Leisure
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_sportsAndLeisure")}</span>}
      </Translation>
    ),
    color: "#f6c095",
    infoPageLeft: "150%",
  },
  {
    name: "Sonstige", //  Others
    label: (
      <Translation>
        {(t, { i18n }) => <span>{t("topics_other")}</span>}
      </Translation>
    ),
    color: "#f9db95",
  },
];

export default topics;

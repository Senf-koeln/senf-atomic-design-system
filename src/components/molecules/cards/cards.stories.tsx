/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import IdeaCard from "./IdeaCard";
import { IdeaCardProps } from "./IdeaCard.types";

import OrganizationCard from "./OrganizationCard";
import { OrganizationCardProps } from "./OrganizationCard.types";

import ProjectroomCard from "./ProjectroomCard";
import { ProjectroomCardProps } from "./ProjectroomCard.types";

export default {
  title: "Molecules/Cards",
  component: OrganizationCard,
  argTypes: {},
} as Meta<typeof OrganizationCard>;

const Template: Story<OrganizationCardProps> = (args) => (
  <OrganizationCard {...args} />
);

const ProjectroomCardTemplate: Story<ProjectroomCardProps> = (args) => (
  <ProjectroomCard {...args} />
);

const IdeaCardTemplate: Story<IdeaCardProps> = (args) => <IdeaCard {...args} />;

export const Idea = IdeaCardTemplate.bind({});
Idea.args = {
  title: "Ampel für Fahrradfahrer",
  body: "Die Verkehrsführung für Fahrradfahrer, die Richtung Rhein fahren, ist ganz gut gelöst mit einem eigen Fahrstreifen und Auffahrt um Rheinufer. Um so verwunderlich finde ich will",
  district: "Neuehrenfeld",
};

export const IdeaProjectroom = IdeaCardTemplate.bind({});
IdeaProjectroom.args = {
  title: "Ampel für Fahrradfahrer",
  description:
    "Die Verkehrsführung für Fahrradfahrer, die Richtung Rhein fahren, ist ganz gut gelöst mit einem eigen Fahrstreifen und Auffahrt um Rheinufer. Um so verwunderlich finde ich will",
  district: "Neuehrenfeld",
  organizationType: "Stadtverwaltung",
  projectroomName: "Projektraum-Name",
};

export const Organization = Template.bind({});
Organization.args = {
  title: "Organization X",
  projectroomsSize: 2,
  organizationType: "Stadtverwaltung",
  img: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
};

export const Projectroom = ProjectroomCardTemplate.bind({});
Projectroom.args = {
  title: "Projektraum Titel X",
  description:
    "Wir bringen die Ideen und Visionen für die Zukunft des Liebigquartiers und einen sozial-ökologischen Wandel zusammen!",
  organizationType: "Initiativen",
  organizationName: "WandelWerk",
  logo: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FJn8lcWDW52jFVAd2UgQC%2Flogo%2Flogo?alt=media&token=978773ee-7e25-4833-a84b-5f7e49295f90",
  ideaSize: 2,
  img: "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
};

/** @format */

import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import AllOrganizationTypes from "../../../assets/icons/AllOrganizationTypes";
import Dot from "../../../assets/icons/Dot";
import DotAllTopics from "../../../assets/icons/DotAllTopics";
import organizationTypes from "../../../data/organizationTypes";
import setColorByTopic from "../../../data/setColorByTopic";
import setOrganizationTypeIcon from "../../../data/setOrganizationTypeIcon";
import topics from "../../../data/topiccs";
import Tag from "../../atoms/tag/Tag";
import { TagSlideProps } from "./TagSlide.types";

const Wrapper = styled.div<TagSlideProps>`
  z-index: 1;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  transition: 1s;
`;

const InnerWrapper = styled.div<TagSlideProps>`
  pointer-events: none;
  padding-left: 0px;
  padding-right: 20px;
  margin: 15px 16px;
  display: flex;
  flex-direction: row;
  width: max-content;
  gap: 8px;
  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
    align-items: flex-start;
    text-align: left;
    flex-wrap: wrap;
    padding: 0px;
    margin: 8px;
    margin-left: 0;
  }
`;

const TagSlide: FC<TagSlideProps> = ({
  loading = false,
  inline = false,
  placing = "list",
  flexDirection,
  type,
  hide,
  openScream,
  selectedTopics,
  selectedOrganizationTypes,

  handleSelectTopics,
  handleSelectOrganizationTypes,
}) => {
  const { t } = useTranslation();

  return (
    !loading &&
    !inline && (
      <Wrapper openScream={openScream} id="Wrapper" placing={placing}>
        <InnerWrapper flexDirection={flexDirection}>
          <Tag
            placing={placing}
            // hide={
            //   (placing === "list" && swipePosition === "bottom") ||
            //   (placing !== "list" &&
            //     placing !== "insights" &&
            //     isMobileCustom &&
            //     (openScream ||
            //       (openProjectRoom && !project?.screams) ||
            //       openAccount ||
            //       openOrganization ||
            //       swipePosition === "top"))
            // }
            onClick={
              type === "topics"
                ? () => handleSelectTopics("all")
                : () => handleSelectOrganizationTypes("all")
            }
            hide={hide}
            active={
              type === "topics"
                ? selectedTopics?.length === 7
                : selectedOrganizationTypes?.length === 7
            }
            color="#000000"
            icon={
              type === "topics" ? <DotAllTopics /> : <AllOrganizationTypes />
            }
            text={
              type === "topics" ? t("topics_all") : t("organizationTypes_all")
            }
          />

          {type === "topics"
            ? topics.map((topic, i) => (
                <Tag
                  key={topic.name}
                  placing={placing}
                  onClick={() => handleSelectTopics(topic.name)}
                  hide={hide}
                  active={
                    selectedTopics?.includes(topic.name) &&
                    selectedTopics?.length !== 7
                  }
                  text={topic.label}
                  icon={<Dot color={setColorByTopic(topic.name)} />}
                  // hide={
                  //   (placing === "list" && swipePosition === "bottom") ||
                  //   (placing !== "list" &&
                  //     placing !== "insights" &&
                  //     isMobileCustom &&
                  //     (openScream ||
                  //       (openProjectRoom && !project?.screams) ||
                  //       openAccount ||
                  //       openOrganization ||
                  //       swipePosition === "top"))
                  // }
                />
              ))
            : organizationTypes.map((organizationTypes, i) => (
                <Tag
                  key={organizationTypes.name}
                  placing={placing}
                  onClick={() =>
                    handleSelectOrganizationTypes(organizationTypes.name)
                  }
                  hide={hide}
                  active={
                    selectedOrganizationTypes?.includes(
                      organizationTypes.name
                    ) && selectedOrganizationTypes?.length !== 7
                  }
                  text={organizationTypes.label}
                  icon={setOrganizationTypeIcon(organizationTypes.name)}
                  // hide={
                  //   (placing === "list" && swipePosition === "bottom") ||
                  //   (placing !== "list" &&
                  //     placing !== "insights" &&
                  //     isMobileCustom &&
                  //     (openScream ||
                  //       (openProjectRoom && !project?.screams) ||
                  //       openAccount ||
                  //       openOrganization ||
                  //       swipePosition === "top"))
                  // }
                />
              ))}
        </InnerWrapper>
      </Wrapper>
    )
  );
};

export default TagSlide;

/** @format */

import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import organizationTypes from "../../../data/organizationTypes";
import setColorByTopic from "../../../data/setColorByTopic";
import topics from "../../../data/topiccs";
import Tag from "../../atoms/tag/Tag";
import { TagSlideProps } from "./TagSlide.types";

const Wrapper = styled.div<TagSlideProps>`
  z-index: 1;
  position: ${(props) =>
    props.placing !== "list" && props.placing !== "insights" && isMobileCustom
      ? "fixed"
      : "relative"};
  top: ${(props) =>
    props.placing === "list"
      ? "0px"
      : props.placing === "insights"
      ? "20px"
      : "none"};
  top: ${(props) =>
    props.placing !== "list" && props.placing !== "insights" && isMobileCustom
      ? "60px"
      : "none"};
  width: 100%;
  overflow-x: scroll;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  transition: 1s;
  /* animation: FilterWrapperMobileAnimation 1s;
  @keyframes FilterWrapperMobileAnimation {
    0% {
      margin-left: 100%;
    }
    100% {
      margin-left: 10px;
    }
  } */
  @media (min-width: 768px) {
    top: 0;
    padding-left: 0;
    padding-bottom: 0;
  }
`;

const InnerWrapper = styled.div<TagSlideProps>`
  padding-left: 0px;
  padding-right: 20px;
  margin: 8px;
  display: flex;
  flex-direction: row;
  width: max-content;
  gap: 8px;
  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    align-items: flex-start;
    text-align: left;
    flex-wrap: wrap;
    padding: 0px;
    margin-left: 0;
  }
`;

const TagSlide: FC<TagSlideProps> = ({
  loading = false,
  inline = false,
  placing = "list",
  column,
  type,
  openScream,
  selectedTopics,
  selectedOrganizationTypes,
}) => {
  const { t } = useTranslation();

  return (
    !loading &&
    !inline && (
      <Wrapper openScream={openScream} id="Wrapper" placing={placing}>
        <InnerWrapper column={column}>
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
            // onClick={
            //   type === "topics"
            //     ? () => dispatch(handleTopicSelectorRedux("all"))
            //     : () => dispatch(handleOrganizationTypesSelectorRedux("all"))
            // }
            active={
              type === "topics"
                ? selectedTopics.length === 7
                : selectedOrganizationTypes?.length === 7
            }
            color="#000000"
            icon="topics-all"
            text={
              type === "topics" ? t("topics_all") : t("organizationTypes_all")
            }
          />

          {type === "topics"
            ? topics.map((topic, i) => (
                <Tag
                  key={topic.name}
                  placing={placing}
                  // onClick={() => dispatch(handleTopicSelectorRedux(topic.name))}
                  active={
                    selectedTopics.includes(topic.name) &&
                    selectedTopics?.length !== 7
                  }
                  iconColor={setColorByTopic(topic.name)}
                  text={topic.label}
                  icon="dot"
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
                  // onClick={() =>
                  //   dispatch(
                  //     handleOrganizationTypesSelectorRedux(
                  //       organizationTypes.name
                  //     )
                  //   )
                  // }
                  active={
                    selectedOrganizationTypes.includes(
                      organizationTypes.name
                    ) && selectedOrganizationTypes.length !== 7
                  }
                  text={organizationTypes.label}
                  icon={organizationTypes.name}
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

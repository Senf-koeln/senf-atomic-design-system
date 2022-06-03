/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import Box from "../../atoms/box/Box";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import MainSwipeList from "../../organisms/mainSwipeList/MainSwipeList";
import MenuSidebar from "../../organisms/menuSidebar/MenuSidebar";
import OrganizationsOverview from "../../organisms/organizationsOverview/OrganizationsOverview";
import { HomescreenMainappProps } from "./HomescreenMainapp.types";

const Wrapper = styled.div<HomescreenMainappProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const TagSlideWrapper = styled.div<HomescreenMainappProps>`
  position: fixed;
  width: 100vw;
  top: 50px;
  left: 0;
`;

const MainColumnWrapper = styled.div`
  /* width: 100vw;
  height: 100%;
  margin-top: 0vh;
  z-index: 90;
  top: 0;
  position: fixed;
  pointer-events: none; */
  @media (min-width: 768px) {
    margin-left: 200px;
    width: 400px;
    height: 100vh;
    overflow-y: scroll;
    z-index: 1;
    top: 0;
    position: fixed;
    overflow-x: visible;
  }
`;

const HomescreenMainapp: FC<HomescreenMainappProps> = ({
  selectedTopics,
  ideaData,
  organizationsData,
}) => {
  const [openOrganizationsOverview, setOpenOrganizationsOverview] =
    useState(false);
  return (
    <Wrapper>
      {isMobileCustom() && (
        <TagSlideWrapper>
          <TagSlide type="topics" selectedTopics={selectedTopics} />
        </TagSlideWrapper>
      )}

      {!isMobileCustom() && <MenuSidebar />}
      <MainColumnWrapper>
        <MainSwipeList
          setOpenOrganizationsOverview={setOpenOrganizationsOverview}
          data={ideaData}
          selectedTopics={["Versorgung"]}
        />
      </MainColumnWrapper>

      {openOrganizationsOverview && (
        <OrganizationsOverview
          data={organizationsData}
          onClick={() => {}}
          selectedOrganizationTypes={["Vereine"]}
        />
      )}
    </Wrapper>
  );
};

export default HomescreenMainapp;

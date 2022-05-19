/** @format */

import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import theme from "../../../styles/theme";
import Button from "../../atoms/buttons/Button";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Shape from "../../atoms/shapes/Shape";
import Accordion from "../../molecules/accordion/Accordion";
import OrganizationCard from "../../molecules/cards/OrganizationCard";
import List from "../../molecules/list/List";
import SwipeModal from "../../molecules/modals/SwipeModal";
import SubNavbar from "../../molecules/navs/SubNavbar";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Toolbar from "../../toolbar/Toolbar";
import { OrganizationsOverviewProps } from "./OrganizationsOverview.types";

const Wrapper = styled.div<OrganizationsOverviewProps>``;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100% - 120px);
  width: 100%;
  margin-top: ${(props) => (props.isMobileCustom ? "-10px" : "0px")};
  overflow: scroll;
  z-index: 1;
  margin-left: 50%;
  padding-bottom: 200px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

const OrganizationsOverview: FC<OrganizationsOverviewProps> = ({
  data,
  text,
  selectedOrganizationTypes,
}) => {
  const { t } = useTranslation();
  console.log(isMobileCustom());
  const content = (
    <InnerWrapper isMobileCustom={isMobileCustom}>
      <FlexWrapper margin="16px 12px 8px 12px" width="calc(100% - 24px)">
        <Toolbar />
      </FlexWrapper>
      <FlexWrapper margin="0px 12px 16px 12px" width="calc(100% - 24px)">
        <Button
          variant="secondary"
          borderStyle="dashed"
          size="small"
          text="+ Organisation anlegen"
          fillWidth="max"
        />
      </FlexWrapper>
      {/* <Toolbar
        swipeListType="organizationsOverview"
        type="standalone"
        loading={loading}
        handleDropdown={handleDropdown}
        dropdown={dropdown}
        dataFinalLength={dataFinalLength}
        setSearchOpen={setSearchOpen}
        searchOpen={searchOpen}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      <ButtonWrapper>
        <Button
          variant="secondary"
          borderStyle="dashed"
          onClick={
            user.authenticated
              ? openCreateOrganization
              : () => setOpenModalAuthenticate(true)
          }
        >
          {t("createOrganization")}
        </Button>
      </ButtonWrapper> */}

      <List CardType={OrganizationCard} data={data} />
    </InnerWrapper>
  );

  return isMobileCustom() ? (
    <SwipeModal
      backgroundColor={theme.colors.beige.beige20}
      openModal={true}
      headerComponentHeight="102px"
      HeaderComponent={
        <React.Fragment>
          <Shape variant={1} position="absolute" marginTop="0px" />

          <SubNavbar
            iconLeft="arrow"
            header={t("organizations")}
            // iconRight="plus"
            // iconRightTransform="rotate(45deg)"
          />
          <TagSlide
            type="organizationTypes"
            selectedOrganizationTypes={selectedOrganizationTypes}
          />
        </React.Fragment>
      }
    >
      {content}
    </SwipeModal>
  ) : (
    <Wrapper>{content}</Wrapper>
  );
};

export default OrganizationsOverview;

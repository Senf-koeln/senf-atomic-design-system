/** @format */

import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import theme from "../../../styles/theme";
import Button from "../../atoms/buttons/Button";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Box from "../../atoms/box/Box";
import Shape from "../../atoms/shapes/Shape";
import Typography from "../../atoms/typography/Typography";
import OrganizationCard from "../../molecules/cards/OrganizationCard";
import List from "../../molecules/list/List";
import SwipeModal from "../../molecules/modals/SwipeModal";
import SubNavbar from "../../molecules/navs/SubNavbar";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Toolbar from "../../molecules/toolbar/Toolbar";
import { OrganizationsOverviewProps } from "./OrganizationsOverview.types";
import Arrow from "../../../assets/icons/Arrow";
import Plus from "../../../assets/icons/Plus";
import Wave from "../../atoms/shapes/Wave";

const Wrapper = styled.div<OrganizationsOverviewProps>`
  background-color: ${({ theme }) => theme.colors.beige.beige20};
  margin-left: 10px;
  margin-top: 10px;
  width: 100%;
  height: calc(100vh - 20px);
  border-radius: 18px;
  overflow-y: scroll;
  z-index: 90;
  top: 0;
  position: fixed;
  transition: 0.3s;
  box-shadow: 40px 8px 30px -12px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  @media (min-width: 768px) {
    /* display: ${({ open }) => (open ? "block" : "none")}; */
    width: ${({ open }) => (open ? "calc(100vw - 430px)" : "0px")};
  }

  @media (max-width: 1350px) {
    width: ${({ open }) => (open ? "calc(100vw - 20px)" : "0px")};
  }
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100% - 120px);
  width: 100%;
  overflow: scroll;
  z-index: 1;
  margin-left: 50%;
  padding-bottom: 200px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: calc(100% - 210px);
  }
`;

export const SVGWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.beige.beige20};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  height: ${(props) => (props.searchOpen ? "260px" : "210px")};
`;

const HeaderWrapper = styled.div`
  position: absolute;
  width: 750px;
  height: 120px;
  margin-left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: transparent;
`;

const OrganizationsOverview: FC<OrganizationsOverviewProps> = ({
  openOrganizationsOverview,
  setOpenOrganizationsOverview,
  data,
  selectedOrganizationTypes,
  handleSelectOrganizationTypes,
  organization,
  projectroomsData,
  user,
  searchTerm,
  setSearchTerm,
  handleButtonOpenCard,
  handleOpenCreateOrganization,
  checkedSortOption,
  setCheckedSortOption,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();
  const [searchOpen, setSearchOpen] = useState(false);

  const toolbarComponent = (
    <Toolbar
      setSearchOpen={setSearchOpen}
      searchOpen={searchOpen}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      secondButton={
        !isMobile && (
          <Button
            variant="secondary"
            size="small"
            text={t("createOrganization")}
            icon={<Plus />}
            onClick={handleOpenCreateOrganization}
          />
        )
      }
      checkedSortOption={checkedSortOption}
      setCheckedSortOption={setCheckedSortOption}
      searchPlaceholder={t("searchBarOrganizations")}
      activeSortOptionLabel={t("newest_organizations")}
      sortOptions={[
        { value: "newest", label: t("newest_organizations") },
        { value: "aToZ", label: t("aToZ_organizations") },
        { value: "zToA", label: t("zToA_organizations") },
      ]}
    />
  );
  return isMobile ? (
    <SwipeModal
      backgroundColor={theme.colors.primary.primary100}
      openModal={openOrganizationsOverview}
      setOpenModal={setOpenOrganizationsOverview}
      headerComponentHeight="102px"
      zIndex="998"
      HeaderComponent={
        <React.Fragment>
          <SubNavbar
            iconLeft={<Arrow transform="rotate(90deg)" />}
            leftButtonClick={() => setOpenOrganizationsOverview(false)}
            header={t("organizations")}
            handlebar={true}
            // iconRight="plus"
            // iconRightTransform="rotate(45deg)"
          />
          <TagSlide
            type="organizationTypes"
            selectedOrganizationTypes={selectedOrganizationTypes}
            handleSelectOrganizationTypes={handleSelectOrganizationTypes}
          />
        </React.Fragment>
      }
    >
      <Wave color={theme.colors.beige.beige20} top="0px" />

      <InnerWrapper isMobile={isMobile}>
        <Box margin="16px 12px 16px 12px">{toolbarComponent}</Box>
        <Box margin="0px 12px 6px 12px">
          <Button
            variant="secondary"
            borderStyle="dashed"
            size="small"
            text={t("createOrganization")}
            fillWidth="max"
            onClick={handleOpenCreateOrganization}

            // onClick={
            //   user.authenticated
            //     ? openCreateOrganization
            //     : () => setOpenModalAuthenticate(true)
            // }
          />
        </Box>
        <List
          CardType={OrganizationCard}
          data={data}
          listType="grid"
          organization={organization}
          projectroomsData={projectroomsData}
          handleButtonOpenCard={handleButtonOpenCard}
        />
      </InnerWrapper>
    </SwipeModal>
  ) : (
    <Wrapper open={openOrganizationsOverview}>
      <SVGWrapper searchOpen={searchOpen}>
        <Box position="fixed" margin="20px" zIndex={2}>
          <RoundedButton
            icon={<Arrow transform="rotate(180deg)" />}
            onClick={() => setOpenOrganizationsOverview(false)}
          />
        </Box>
        <HeaderWrapper>
          <Box margin="20px 0px 0px 0px" justifyContent="center">
            <Typography
              variant="h2"
              // fontSize={document.body.clientWidth > 368 ? "22px" : "19px"}
              textAlign="center"
            >
              {t("organizations")}
            </Typography>
          </Box>
          <TagSlide
            type="organizationTypes"
            selectedOrganizationTypes={selectedOrganizationTypes}
            handleSelectOrganizationTypes={handleSelectOrganizationTypes}
          />

          <Box margin="16px 12px 16px 12px">{toolbarComponent}</Box>
        </HeaderWrapper>
        <svg
          width="100%"
          height="126"
          viewBox="0 0 1100 126"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 125.5V0.5H1130.5V99C1025 143 974.588 95.9476 942.5 83C828.5 37 819 43.5 704 62.5C558 86.6217 307.5 44.5 196 99C128.785 131.854 37.1667 124.667 0 125.5Z"
            fill="#FED957"
          />
        </svg>
      </SVGWrapper>

      <InnerWrapper isMobile={isMobile}>
        <List
          CardType={OrganizationCard}
          data={data}
          listType="grid"
          organization={organization}
          projectroomsData={projectroomsData}
          handleButtonOpenCard={handleButtonOpenCard}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default OrganizationsOverview;

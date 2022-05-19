/** @format */

import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "../atoms/buttons/Button";
import TertiaryButton from "../atoms/buttons/TertiaryButton";
import { ToolbarProps } from "./Toolbar.types";

const Wrapper = styled.div<ToolbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  transition: height 0.5s;
  padding-bottom: ${(props) => (props.searchOpen ? "70px" : "10px")};
  transition: 0.5s;
  animation: ToolbarAnimation 0.7s;
  pointer-events: none;
  flex-flow: wrap;
  @media (min-width: 768px) {
    position: relative;
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "30px")};
    z-index: 99;
  }
  @keyframes ToolbarAnimation {
    0% {
      opacity: 0;
      transform: translateY(10%);
    }
    20% {
      opacity: 0;
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  z-index: -1;
  pointer-events: auto;
`;

const SearchIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  pointer-events: auto;
  margin-left: auto;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.searchTerm !== "" ? "white" : "transparent"}; ;
`;

const AddIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f6cb2f;
  pointer-events: auto;
  margin-left: 5px;
  margin-right: 0px;
`;

const Toolbar: FC<ToolbarProps> = ({
  handleDropdown,
  handledropdownStatus,
  dropdown,
  dropdownStatus,
  dropdownStatusNumbers,
  handleClickSwipe,
  dataFinalLength,
  setSearchOpen,
  searchOpen,
  setSearchTerm,
  searchTerm,
}) => {
  const { t } = useTranslation();

  const setSearch = () => {
    setSearchOpen(!searchOpen);

    // if (isMobileCustom) {
    //   dispatch(setSwipePositionUp());
    // }
  };

  return (
    <Wrapper searchOpen={searchOpen}>
      <TertiaryButton
        onClick={handleDropdown}
        text="Sortieren von A-Z"
        iconRight="arrow"
        iconRightTransform="rotate(0deg)"
      />

      <Button
        variant="secondary"
        icon="search"
        size="small"
        onClick={setSearch}
        searchTerm={searchTerm}
        searchOpen={searchOpen}
      />

      {/* {isMobileCustom && <Background onClick={handleClickSwipe} />} */}
      {/* {searchOpen && (
        <Searchbar
          placeholder={
            swipeListType === "organizationsOverview"
              ? t("searchBarOrganizations")
              : t("searchBar")
          }
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      )} */}
    </Wrapper>
  );
};

export default Toolbar;

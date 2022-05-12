/** @format */

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import InfiniteScroll from "react-infinite-scroller";
import { usePrevious } from "../../../hooks/usePrevious";

import IdeaCard from "../cards/IdeaCard";
import ProjectCard from "../cards/ProjectroomCard";
import OrganizationCard from "../cards/OrganizationCard";
import { ListProps } from "./List.types";
// import ObjectCard from "../cards/ObjectCard";

// import {
//   NoMoreMainContent,
//   NoMoreMyContent,
//   NoMoreProjectsContent,
//   NoMoreProjectRooms,

// } from "./NoMoreContent";

// import { isMobileCustom } from "../../../util/customDeviceDetect";
// import { NoMore } from "./styles/sharedStyles";

const NoIdeasYet = styled.div`
  position: relative;
  font-size: 15pt;
  color: #414345;
  width: 80%;
  margin-left: 10%;
  text-align: center;
`;

const List: FC<ListProps> = ({ data, CardType, handleButtonClick }) => {
  let itemsPerPage = 1;
  const [hasMoreItems, sethasMoreItems] = useState(true);
  const [listItems, setListItems] = useState(itemsPerPage);

  const showItems = (dataArray, CardType) => {
    var items = [];
    if (dataArray.length !== 0) {
      for (var i = 0; i < listItems; i++) {
        items.push(
          <CardType data={dataArray[i]} handleButtonClick={handleButtonClick} />
        );
      }
      return items;
    }
  };

  const loadMore = () => {
    if (listItems === data?.length) {
      sethasMoreItems(false);
    } else {
      setTimeout(() => {
        setListItems(listItems + itemsPerPage);
      }, 100);
    }
  };

  return (
    <InfiniteScroll
      id="List"
      loadMore={() => loadMore()}
      hasMore={hasMoreItems}
      useWindow={false}
    >
      {showItems(data, CardType)}
    </InfiniteScroll>
  );
};

export default List;

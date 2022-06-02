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
import Box from "../../atoms/box/Box";
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

const List: FC<ListProps> = ({
  loading,
  dropdown,
  data,
  CardType,
  handleButtonOpenCard,
  handleButtonLike,
  handleButtonComment,
  user,
}) => {
  const dataLength = data?.length;
  const { t } = useTranslation();
  const prevdataLength = usePrevious({ dataLength });
  const prevDropdown = usePrevious({ dropdown });

  useEffect(() => {
    if (
      (dataLength &&
        prevdataLength &&
        prevdataLength.dataLength !== dataLength) ||
      (dropdown && prevDropdown && prevDropdown.dropdown !== dropdown)
    ) {
      const element = document.getElementById("List");

      element?.scrollTo({
        top: 0,
        left: 0,
      });

      setListItems(1);
      sethasMoreItems(true);
    }
  }, [loading, dropdown, dataLength]);

  let itemsPerPage = 1;
  const [hasMoreItems, sethasMoreItems] = useState(true);
  const [listItems, setListItems] = useState(itemsPerPage);

  const showItems = (dataArray, CardType) => {
    var items = [];
    if (dataArray?.length !== 0) {
      for (var i = 0; i < listItems; i++) {
        items.push(
          dataArray[i]?.title && (
            <Box margin="10px 10px 0px 10px">
              <CardType
                data={dataArray[i]}
                handleButtonOpenCard={handleButtonOpenCard}
                handleButtonLike={handleButtonLike}
                handleButtonComment={handleButtonComment}
                user={user}
              />
            </Box>
          )
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

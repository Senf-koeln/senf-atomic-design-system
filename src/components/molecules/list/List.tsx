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
import Typography from "../../atoms/typography/Typography";
import theme from "../../../styles/theme";

const ListEnd = styled.div`
  width: auto;
  margin: 24px;
  height: 200px;
`;
const ListEndText = styled.div`
  animation: 2s opacityAfter50PercentAnimation;
`;
const List: FC<ListProps> = ({
  listType,
  loading,
  CardType,
  dropdown,
  data,
  organization,
  organizations,
  ideasData,
  projectroomsData,
  handleButtonOpenCard,
  handleOpenProjectroom,
  handleButtonLike,
  handleButtonComment,
  handleOpenMenuComment,
  user,
  listEndText,
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
            <Box
              margin="16px 16px 0px 16px"
              display={listType === "grid" ? "contents" : "flex"}
              flexDirection={listType === "grid" ? "row" : "column"}
            >
              <CardType
                data={dataArray[i]}
                organization={organization}
                organizations={organizations}
                ideasData={ideasData}
                projectroomsData={projectroomsData}
                handleButtonOpenCard={handleButtonOpenCard}
                handleOpenProjectroom={handleOpenProjectroom}
                handleButtonLike={handleButtonLike}
                handleButtonComment={handleButtonComment}
                handleOpenMenuComment={handleOpenMenuComment}
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
    <React.Fragment>
      {data && (
        <InfiniteScroll
          id="List"
          loadMore={() => loadMore()}
          hasMore={hasMoreItems}
          useWindow={false}
        >
          {showItems(data, CardType)}
        </InfiniteScroll>
      )}
      <ListEnd>
        {listEndText && !hasMoreItems && (
          <ListEndText>
            <Typography
              variant="h3"
              textAlign="center"
              color={theme.colors.black.black60tra}
            >
              {listEndText}
            </Typography>
          </ListEndText>
        )}
      </ListEnd>
    </React.Fragment>
  );
};

export default List;

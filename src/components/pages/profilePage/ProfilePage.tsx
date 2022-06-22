/** @format */

import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import {
  LayerWhiteFirstDefault,
  LayerWhiteSecondDefault,
} from "../../atoms/layerStyles/LayerStyles";
import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";
import { ProfilePageProps } from "./ProfilePage.types";
import { useTranslation } from "react-i18next";
import Input from "../../atoms/inputs/Input";
import List from "../../molecules/list/List";
import CommentCard from "../../molecules/cards/commentCard";
import Wave from "../../atoms/shapes/Wave";
import theme from "../../../styles/theme";
import Divider from "../../atoms/divider/Divider";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import DetailSidebar from "../../organisms/detailSidebar/DetailSidebar";
import ImagePlaceholder from "../../atoms/imagePlaceholder/ImagePlaceholder";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import Arrow from "../../../assets/icons/Arrow";
import Tabs from "../../molecules/tabs/Tabs";
import Bulb from "../../../assets/icons/Bulb";
import Info from "../../../assets/icons/Info";
import More from "../../../assets/icons/More";

import IdeaCard from "../../molecules/cards/IdeaCard";
import ContentDropdown from "../../atoms/contentDropdown/ContentDropdown";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Button from "../../atoms/buttons/Button";
import OrganizationCard from "../../molecules/cards/OrganizationCard";
import Logout from "../../../assets/icons/Logout";
import Edit from "../../../assets/icons/Edit";
import Plus from "../../../assets/icons/Plus";

const DragWrapper = styled(animated.div)<ProfilePageProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  ${(props) => LayerWhiteSecondDefault}
  border-radius: 18px;
  height: calc(100vh - 20px);
  width: 100%;
  max-width: 470px;

  background-color: ${({ theme }) => theme.colors.primary.primary100};
  overflow: hidden;

  overscroll-behavior: contain;
  overflow-x: hidden;
  position: absolute;
  pointer-events: all;
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 96;
  top: 0;
  overflow: scroll;
  overscroll-behavior: contain;
  animation: translateYFrom100to70pxAnimation 1s;

  @media (min-width: 768px) {
    width: 470px;
    max-width: 470px;
    border-radius: 18px;
    margin: 10px;
    height: calc(100vh - 20px);
    overflow: hidden;
    animation: none;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  @media (min-width: 768px) {
    padding: 10px 0px 0px 70px;
  }
`;

const ImageWrapper = styled.div`
  ${(props) => LayerWhiteFirstDefault}
  width:158px;
  height: 158px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoPlacer = styled.div`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  ${(props) => LayerWhiteSecondDefault}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilePage: FC<ProfilePageProps> = ({
  user,
  organization,
  organizations,
  myOrganizations,
  handleButtonOpenCard,
  handleOpenProjectroom,
  handleButtonClose,
  setAuthEditOpen,
  handleLogout,
  handleDeleteAccount,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();
  const [order, setOrder] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [swipePosition, setSwipePosition] = useState("top");

  const { handle, description, photoURL, screams, likes } = user;

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [props, set] = useSpring(() => ({
    y: 0,
    transform: isMobile && `translateY(${70}px)`,
    overflow: "hidden",
    touchAction: "none",
    userSelect: "none",
  }));

  const bind = useDrag(
    ({ last, down, movement: [mx, my] }) => {
      if (isMobile) {
        const el = document.getElementById("dragWrapper");

        if (last && my < -50 && swipePosition === "bottom") {
          set({
            transform: !down ? `translateY(${70}px)` : `translateY(${0}px)`,
            touchAction: "unset",
            overflow: "scroll",
            userSelect: "all",
          });
          setSwipePosition("top");
        }
        if (last && my > 150 && swipePosition === "top") {
          set({
            transform: down
              ? `translateY(${0}px)`
              : `translateY(${window.innerHeight - 200}px)`,
            touchAction: "none",
            overflow: "hidden",
            userSelect: "none",
          });
          setSwipePosition("bottom");
        }
        if (swipePosition !== "top") {
          set({ y: down ? my : 0, userSelect: "none" });
        }

        if (last && mx > 100) {
          handleButtonClose();
        }
      }
    },
    {
      pointer: { touch: true },
      bounds: {
        enabled: true,
        top: -window.innerHeight / 2,
        bottom: window.innerHeight - 120,
      },
    }
  );

  return (
    user && (
      <React.Fragment>
        <DetailSidebar
          handleButtonClose={() => handleButtonClose(false)}
          sideDivider={true}
          SecondButton={
            <ContentDropdown
              open={dropdownOpen}
              setOpen={setDropdownOpen}
              direction={isMobile ? "downLeft" : "downRight"}
              OpenButton={
                <RoundedButton
                  variant="white"
                  size="small"
                  onClick={handleToggle}
                  icon={<More />}
                />
              }
              Content={
                <Box gap="5px" flexDirection="column">
                  <Button
                    variant={"secondary"}
                    size="small"
                    text={t("profile.edit")}
                    justifyContent="flex-start"
                    onClick={() => setAuthEditOpen(true)}
                    icon={<Edit />}
                  />
                  <Button
                    variant={"secondary"}
                    size="small"
                    text={t("logout")}
                    justifyContent="flex-start"
                    onClick={handleLogout}
                    icon={<Logout />}
                    // disabled={i18n.resolvedLanguage === lng}
                  />
                  <Button
                    variant={"secondary"}
                    size="small"
                    text={t("profile.delete")}
                    justifyContent="flex-start"
                    onClick={handleDeleteAccount}
                    icon={<Plus transform="rotate(45deg)" />}
                    // disabled={i18n.resolvedLanguage === lng}
                  />
                </Box>
              }
            />
          }
        />
        <DragWrapper
          id="dragWrapper"
          style={props}
          {...bind()}
          isMobile={isMobile}
        >
          <Wave top="0px" color={theme.colors.beige.beige20} />

          <ContentWrapper>
            <Box justifyContent="center" margin="20px">
              <ImageWrapper>
                <ImagePlaceholder
                  img={photoURL ? photoURL : null}
                  borderRadius="18px"
                  height="calc(100% - 40px)"
                  width="calc(100% - 40px)"
                />
              </ImageWrapper>
            </Box>
            <Box justifyContent="center" margin="20px">
              <Typography variant="h3">{handle}</Typography>
            </Box>

            <Box margin="0px 24px" flexDirection="column">
              <Typography variant="buttonBg">
                {t("profilePage.aboutHeadline")}
              </Typography>

              <Box margin="5px 0px">
                {description ? (
                  <Typography variant="bodyBg">{description}</Typography>
                ) : (
                  <Button
                    variant="secondary"
                    size="small"
                    text={t("profilePage.addDescription")}
                    onClick={() => setAuthEditOpen(true)}
                  />
                )}
              </Box>
            </Box>

            <Divider margin="14px 24px 16px 24px" width="calc(100% - 48px)" />
            <Box margin="0px 24px 0px 24px" gap="10px">
              <Tabs
                fontSize="buttonSm"
                order={order}
                setOrder={setOrder}
                tabs={
                  myOrganizations
                    ? [
                        { icon: <Bulb />, text: "Ideen" },
                        { icon: <Info />, text: "Organisationen" },
                        // { icon: <Info />, text: "Interaktionen" },
                      ]
                    : [
                        { icon: <Bulb />, text: "Ideen" },
                        // { icon: <Info />, text: "Interaktionen" },
                      ]
                }
              />
            </Box>

            <List
              CardType={order === 1 ? IdeaCard : OrganizationCard}
              data={order === 1 ? screams : myOrganizations}
              listType={order === 2 && "grid"}
              handleButtonOpenCard={handleButtonOpenCard}
              handleOpenProjectroom={handleOpenProjectroom}
              organizations={organizations}
              listEndText={
                order === 1 && screams > 0
                  ? t("noMoreIdeas")
                  : order === 1 && screams < 1 && t("noSharedIdeas")

                // :t("noIdeasWithFilter")
              }
            />
          </ContentWrapper>
        </DragWrapper>
      </React.Fragment>
    )
  );
};

export default ProfilePage;

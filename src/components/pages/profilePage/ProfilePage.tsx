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
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow-y: scroll;

  @media (min-width: 768px) {
    padding: 10px 10px 0px 70px;
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

const InfoWidget = styled.div`
  max-width: 100%;
  width: 352px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  height: ${(props) => (props.infoOpen ? "auto" : "90px")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${(props) => (props.infoOpen ? "block" : "-webkit-box")};
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const ProfilePage: FC<ProfilePageProps> = ({
  user,
  organization,
  organizations,
  handleButtonOpenCard,
  handleButtonClose,
  setEditProfileOpen,
  handleLogout,
  handleDeleteAccount,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();
  const [infoOpen, setInfoOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [swipePosition, setSwipePosition] = useState("top");

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
    <React.Fragment>
      <DetailSidebar
        handleButtonClose={() => handleButtonClose(false)}
        sideDivider={true}
        SecondButton={
          <ContentDropdown
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            openButtonWidth="36px"
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
                  text={t("Profil bearbeiten")}
                  onClick={() => setEditProfileOpen(true)}
                  // disabled={i18n.resolvedLanguage === lng}
                />
                <Button
                  variant={"secondary"}
                  size="small"
                  text={t("logout")}
                  onClick={handleLogout}
                  // disabled={i18n.resolvedLanguage === lng}
                />
                <Button
                  variant={"secondary"}
                  size="small"
                  text={t("delete_account")}
                  onClick={handleDeleteAccount}
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

        <InnerWrapper>
          <Box justifyContent="center" margin="20px">
            <ImageWrapper>
              <ImagePlaceholder
                img={user?.img ? user?.img : null}
                borderRadius="18px"
                height="calc(100% - 40px)"
                width="calc(100% - 40px)"
              />
            </ImageWrapper>
          </Box>
          <Box justifyContent="center" margin="20px">
            <Typography variant="h3">{user?.userHandle}</Typography>
          </Box>

          <Box margin="21px 0px 0px 18px">
            <TertiaryButton
              text={t("information")}
              iconRight={
                <Arrow
                  transform={infoOpen ? "rotate(-90deg) " : "rotate(0deg) "}
                />
              }
              onClick={() => setInfoOpen(!infoOpen)}
            />
          </Box>
          <Box margin="0px 0px 0px 24px">
            <InfoWidget
              onClick={() => setInfoOpen(!infoOpen)}
              infoOpen={infoOpen}
            >
              <Typography variant="bodyBg">{user?.description}</Typography>
            </InfoWidget>
          </Box>

          <Divider margin="14px 24px 16px 24px" width="calc(100% - 48px)" />
          <Box margin="0px 24px 0px 24px" gap="10px">
            <Tabs
              fontSize="buttonSm"
              order={0}
              tabs={[
                { icon: <Bulb />, text: "Ideen" },
                { icon: <Info />, text: "Organisationen" },
                { icon: <Info />, text: "Interaktionen" },
              ]}
            />

            {/* <Typography variant="buttonBg">Unsere Projekträume</Typography>
          <Typography variant="buttonBg">Kalender</Typography> */}
          </Box>

          <Box margin="0px 12px">
            {user?.ideas && (
              <List
                CardType={IdeaCard}
                data={user?.ideas}
                handleButtonOpenCard={handleButtonOpenCard}
                organizations={organizations}
              />
            )}
          </Box>
        </InnerWrapper>
      </DragWrapper>
    </React.Fragment>
  );
};

export default ProfilePage;

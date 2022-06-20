/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import Dialog from "../../molecules/dialog/Dialog";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import { OrganizationPageProps } from "./OrganizationPage.types";
import Box from "../../atoms/box/Box";
import ImagePlaceholder from "../../atoms/imagePlaceholder/ImagePlaceholder";
import {
  LayerWhiteFirstDefault,
  LayerWhiteSecondDefault,
} from "../../atoms/layerStyles/LayerStyles";
import Typography from "../../atoms/typography/Typography";
import { useTranslation } from "react-i18next";
import Icon from "../../atoms/icons/Icon";
import theme from "../../../styles/theme";
import Button from "../../atoms/buttons/Button";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import Divider from "../../atoms/divider/Divider";
import List from "../../molecules/list/List";
import ProjectroomCard from "../../molecules/cards/ProjectroomCard";
import Modal from "../../molecules/modals/Modal";
import Accordion from "../../molecules/accordion/Accordion";
import SubNavbar from "../../molecules/navs/SubNavbar";
import setOrganizationTypeIcon from "../../../data/setOrganizationTypeIcon";
import Arrow from "../../../assets/icons/Arrow";
import Plus from "../../../assets/icons/Plus";
import More from "../../../assets/icons/More";
import Tabs from "../../molecules/tabs/Tabs";
import Bulb from "../../../assets/icons/Bulb";
import Info from "../../../assets/icons/Info";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import Room from "../../../assets/icons/Room";

import Calendar from "../../organisms/calendar/Calendar";

// const Calendar = React.lazy(() => import("../../organisms/calendar/Calendar"));

const SVGWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: -1;
  width: 100%;
  height: 300px;
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

const Example: FC<OrganizationPageProps> = ({
  user,
  organization,
  organizations,
  handleCloseOrganizationPage,
  handleButtonOpenCard,
  handleEdit,
  setModalData,
  googleCalendarApiKey,
}) => {
  const { t } = useTranslation();

  const [infoOpen, setInfoOpen] = useState(false);
  const [order, setOrder] = useState(1);

  return (
    <Dialog
      openDialog={true}
      right="0px"
      backgroundColor={theme.colors.beige.beige20}
      overflow="hidden scroll"
      zIndex="999"
      boxShadow={
        document.body.clientWidth > 1350 &&
        "-40px 8px 30px -12px rgba(0, 0, 0, 0.2)"
      }
    >
      <SVGWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="466"
          style={{
            position: "absolute",
            zIndex: -1,
            marginTop: "40px",
            transform: "scale(1.2)",
          }}
        >
          <path
            d="M0.5 106.5V0.5L375.5 0V38.5C361 35.5 333 41 316 61C290.075 91.5 237.5 111.5 143 91.5C67.4 75.5 16 94.6667 0.5 106.5Z"
            fill="#FED957"
          />
        </svg>
      </SVGWrapper>
      <Box position="fixed" margin="20px" zIndex={2}>
        <RoundedButton
          icon={<Plus transform="rotate(45deg)" />}
          onClick={handleCloseOrganizationPage}
        />
      </Box>

      {user?.userId && organization?.userIds.includes(user?.userId) && (
        <Box position="absolute" margin="20px" right="0px" zIndex={2}>
          <RoundedButton icon={<More />} onClick={handleEdit} />
        </Box>
      )}

      <Box justifyContent="center" margin="20px">
        <ImageWrapper>
          <ImagePlaceholder
            img={organization?.logoURL ? organization.logoURL : null}
            borderRadius="18px"
            height="calc(100% - 40px)"
            width="calc(100% - 40px)"
          />
        </ImageWrapper>
      </Box>

      {organization?.status === "deactivated" ? (
        <Box margin="24px">
          {/* //ADD COLOR TO TYPOGRAPHY COMPONENT and THEME COLOR*/}
          <Typography variant="h3" color="#ca3336">
            {t("organization_is_deactivated")}
          </Typography>
        </Box>
      ) : (
        organization?.status === "uncompleted" && (
          <Box margin="24px">
            <Typography variant="h3" color="#ca3336">
              {t("organization_is_uncompleted")}
            </Typography>
          </Box>
        )
      )}
      <Box margin="24px" alignItems="center" gap="12px">
        <LogoPlacer>
          <Icon
            icon={setOrganizationTypeIcon(organization?.organizationType)}
          />
        </LogoPlacer>
        <Typography variant="h3"> {organization?.title}</Typography>
      </Box>

      <Box margin="24px" alignItems="center" gap="10px">
        {(organization.contact ||
          organization.weblink ||
          organization.address) && (
          <Button
            variant="secondary"
            text={t("contact")}
            fillWidth="max"
            size="small"
            onClick={() =>
              setModalData(
                <Box>
                  <SubNavbar
                    iconLeft={<Arrow transform="rotate(90deg)" />}
                    leftButtonClick={() => setModalData(null)}
                    header={t("contact")}
                    handlebar={true}
                  />
                  <Box margin="18px">
                    {organization?.contact && (
                      <Typography variant="bodyBg">
                        {organization.contact}
                      </Typography>
                    )}
                    {organization?.contact && <Divider />}
                    {organization?.weblink && (
                      <Typography variant="bodyBg">
                        {organization.contact}{" "}
                      </Typography>
                    )}
                    {organization?.weblink && <Divider />}
                    {organization?.address && (
                      <Typography variant="bodyBg">
                        {organization.contact}{" "}
                      </Typography>
                    )}
                  </Box>
                </Box>
              )
            }
          />
        )}
        {organization.faqs && (
          <Button
            variant="secondary"
            text={t("faq")}
            fillWidth="max"
            size="small"
            onClick={() =>
              setModalData(
                <Box>
                  <SubNavbar
                    iconLeft={<Arrow transform="rotate(90deg)" />}
                    leftButtonClick={setModalData(null)}
                    header={t("FAQ")}
                    handlebar={true}
                  />
                  <Box margin="18px">
                    <Accordion data={organization.faqs} />
                  </Box>
                </Box>
              )
            }
          />
        )}
      </Box>
      <Box margin="21px 0px 0px 18px">
        <TertiaryButton
          text={t("information")}
          iconRight={
            <Arrow transform={infoOpen ? "rotate(-90deg) " : "rotate(0deg) "} />
          }
          onClick={() => setInfoOpen(!infoOpen)}
        />
      </Box>
      <Box margin="2px 0px 0px 24px">
        <InfoWidget onClick={() => setInfoOpen(!infoOpen)} infoOpen={infoOpen}>
          <Typography variant="bodyBg">{organization?.description}</Typography>
        </InfoWidget>
      </Box>

      <Divider margin="14px 24px 16px 24px" width="calc(100% - 48px)" />

      {organization?.googleCalendarId && (
        <Box margin="0px 24px 0px 24px" gap="10px">
          <Tabs
            fontSize="buttonSm"
            order={order}
            setOrder={setOrder}
            tabs={[
              { icon: <Room />, text: "Projekträume" },
              { icon: <CalendarIcon />, text: "Kalender" },
              // { icon: <Info />, text: "Interaktionen" },
            ]}
          />
        </Box>
      )}

      {order === 1 ? (
        <List
          CardType={ProjectroomCard}
          data={organization?.projectRooms}
          handleButtonOpenCard={handleButtonOpenCard}
          organizations={organizations}
          listEndText={
            !organization?.projectRooms || organization?.projectRooms < 1
              ? t("noOrganizationProjectRooms")
              : t("noMoreProjectrooms")
          }
        />
      ) : (
        order === 2 &&
        organization?.googleCalendarId && (
          <Box margin="10px 10px 0px 0px" width="100%">
            <Calendar
              googleCalendarApiKey={googleCalendarApiKey}
              googleCalendarId={organization?.googleCalendarId}
              calendarType="google"
            />
          </Box>
        )
      )}
    </Dialog>
  );
};

export default Example;

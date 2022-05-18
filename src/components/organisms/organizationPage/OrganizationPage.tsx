/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Dialog from "../../molecules/dialog/Dialog";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import { OrganizationPageProps } from "./OrganizationPage.types";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
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

const SVGWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: -1;
  width: 100%;
  height: 300px;
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

const Example: FC<OrganizationPageProps> = ({ organization }) => {
  const { t } = useTranslation();
  const { logo } = organization;
  return (
    <Dialog
      openDialog={true}
      right="0px"
      backgroundColor={theme.colors.beige.beige20}
      overflow="hidden scroll"
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
      <FlexWrapper position="fixed" margin="20px" width="50px" zIndex={2}>
        <RoundedButton icon="arrow" />
      </FlexWrapper>

      {/* {organization?.userIds.includes(user.userId) && ( ROUNDEDMENUBUTTON)} */}
      <FlexWrapper position="absolute" margin="20px" right="0px" width="50px">
        <RoundedButton icon="Menu" />
      </FlexWrapper>

      <FlexWrapper
        justifyContent="center"
        margin="20px"
        width="calc(100% - 40px)"
      >
        <ImagePlaceholder
          img={logo ? logo : null}
          borderRadius="18px"
          height="158px"
          width="158px"
          layerStyle={LayerWhiteFirstDefault}
        />
      </FlexWrapper>

      {organization?.status === "deactivated" ? (
        <FlexWrapper margin="24px" width="calc(100% - 48px)">
          {/* //ADD COLOR TO TYPOGRAPHY COMPONENT and THEME COLOR*/}
          <Typography variant="h3" color="#ca3336">
            {t("organization_is_deactivated")}
          </Typography>
        </FlexWrapper>
      ) : (
        organization?.status === "uncompleted" && (
          <FlexWrapper margin="24px" width="calc(100% - 48px)">
            <Typography variant="h3" color="#ca3336">
              {t("organization_is_uncompleted")}
            </Typography>
          </FlexWrapper>
        )
      )}
      <FlexWrapper
        margin="24px"
        width="calc(100% - 48px)"
        alignItems="center"
        gap="10px"
      >
        <LogoPlacer>
          <Icon icon={organization.organizationType} transform="scale(0.7)" />
        </LogoPlacer>
        <Typography variant="h3"> {organization.title}</Typography>
      </FlexWrapper>

      <FlexWrapper
        margin="24px"
        width="calc(100% - 48px)"
        alignItems="center"
        gap="10px"
      >
        {(organization.contact ||
          organization.weblink ||
          organization.address) && (
          <Button variant="secondary" text={t("contact")} fillWidth="max" />
        )}
        {organization.faqs && (
          <Button variant="secondary" text={t("faq")} fillWidth="max" />
        )}
      </FlexWrapper>
      <FlexWrapper margin="21px 0px 0px 18px" width="calc(100% - 36px)">
        <TertiaryButton
          text={t("information")}
          iconRight="arrow"
          iconRightTransform="rotate(270deg) scale(0.7)"
        />
      </FlexWrapper>
      <FlexWrapper margin="0px 0px 0px 24px" width="calc(100% - 48px)">
        <Typography variant="bodyBg">{organization.description}</Typography>
      </FlexWrapper>
    </Dialog>
  );
};

export default Example;

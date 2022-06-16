/** @format */

import React, { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import Box from "../../atoms/box/Box";
import Form from "../../molecules/form/Form";
import { AuthAddDetailsProps } from "./AuthAddDetails.types";
import { useFormik } from "formik";
import * as yup from "yup";

import Typography from "../../atoms/typography/Typography";
import { openLink } from "../../../util/helpers";
import Dropdown from "../../atoms/dropdown/Dropdown";
import ImagePlaceholder from "../../atoms/imagePlaceholder/ImagePlaceholder";
import { LayerWhiteFirstDefault } from "../../atoms/layerStyles/LayerStyles";
import Input from "../../atoms/inputs/Input";
import MultiDropdown from "../../atoms/dropdown/multi/MultiDropdown";

const ImageWrapper = styled.div`
  ${(props) => LayerWhiteFirstDefault}
  width:158px;
  height: 158px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthAddDetails: FC<AuthAddDetailsProps> = ({ variant, loading }) => {
  const { t } = useTranslation();

  return (
    <Box
      flexDirection="column"
      margin="80px 10% 0px 10%"
      position="relative"
      zIndex={9999}
    >
      <Typography variant="h1" style={{ position: "relative" }}>
        {/* {t("auth_add_details_header1")} */}
        Vervollständige
      </Typography>
      <Typography variant="h1" style={{ position: "relative" }}>
        dein Profil
        {/* {t("auth_add_details_header2")} */}
      </Typography>

      <Box margin="25px 0px 24px 0px" flexDirection="column" gap="10px">
        <Box justifyContent="center" margin="20px">
          <ImageWrapper>
            <ImagePlaceholder
              img={null}
              borderRadius="18px"
              height="calc(100% - 40px)"
              width="calc(100% - 40px)"
            />
          </ImageWrapper>
        </Box>
        <Input
          type="textarea"
          rows={3}
          placeholder={"auth_add_details_description"}
          onChange={() => console.log()}
          value={""}
        />
        <Input
          type="text"
          placeholder={t("zipcode")}
          onChange={() => console.log()}
          value={""}
        />

        <Dropdown
          id="MultiDropdowns"
          listItems={{
            Gender1: [
              {
                label: "Non-binary",
                value: "Non-binary",
              },
              {
                label: "Female",
                value: "Female",
              },
              {
                label: "Male",
                value: "Male",
              },
            ],
            Gender2: [
              {
                label: "Non-binary",
                value: "Non-binary",
              },
              {
                label: "Female",
                value: "Female",
              },
              {
                label: "Male",
                value: "Female",
              },
            ],
          }}
          multi
          placeholder="Geburtsjahr"
          recieveValue={() => {}}
        />
        <br />
        <Button variant="white">{t("submit")}</Button>
      </Box>
    </Box>
  );
};

export default AuthAddDetails;

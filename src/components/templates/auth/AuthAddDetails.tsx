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
import Bulb from "../../../assets/icons/Bulb";
import Icon from "../../atoms/icons/Icon";
import Loader from "../../atoms/animations/Loader";

const ImageWrapper = styled.label`
  ${(props) => LayerWhiteFirstDefault}
  width:158px;
  height: 158px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthAddDetails: FC<AuthAddDetailsProps> = ({
  user,
  handleSubmitEditDetails,
  handleImageUpload,
  uploadingImage,
}) => {
  const { t } = useTranslation();

  const [data, setData] = useState({
    handle: user?.handle,
    description: user?.description ? user?.description : null,
    zipcode: user?.zipcode ? user?.zipcode : null,
    age: user?.age ? user?.age : null,
    sex: user?.sex ? user?.sex : null,
  });

  useEffect(() => {
    // Set up canvas
    setData({
      handle: user?.handle,
      description: user?.description ? user?.description : null,
      zipcode: user?.zipcode ? user?.zipcode : null,
      age: user?.age ? user?.age : null,
      sex: user?.sex ? user?.sex : null,
    });
  }, [user]);

  function generateArrayOfYears() {
    var max = new Date().getFullYear() - 14;
    var min = max - 100;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push({ value: i, label: i });
    }
    return years;
  }

  var years = generateArrayOfYears();

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
          <ImageWrapper
            // onMouseEnter={() => setUploadImageHover(true)}
            // onMouseLeave={() => setUploadImageHover(false)}
            htmlFor="imageUploader"
          >
            {user?.photoURL ? (
              <ImagePlaceholder
                img={user?.photoURL}
                borderRadius="18px"
                height="calc(100% - 40px)"
                width="calc(100% - 40px)"
              />
            ) : uploadingImage ? (
              <Loader />
            ) : (
              <Icon icon={<Bulb />} />
            )}
          </ImageWrapper>
          <input
            type="file"
            onChange={(event) => handleImageUpload(event)}
            style={{ display: "none" }}
            id="imageUploader"
          />
        </Box>
        <Input
          type="text"
          placeholder={t("username")}
          onChange={(e) => setData({ ...data, handle: e.target.value })}
          value={data.handle}
        />

        <Input
          type="textarea"
          rows={3}
          placeholder={t("auth_add_details_description")}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          value={data.description}
        />
        <Input
          type="text"
          placeholder={t("zipcode")}
          onChange={(e) => setData({ ...data, zipcode: e.target.value })}
          value={data.zipcode}
        />
        <Box gap="8px">
          <Dropdown
            id="sex"
            listItems={{
              sex: [
                {
                  label: t("diverse"),
                  value: "diverse",
                },
                {
                  label: t("female"),
                  value: "female",
                },
                {
                  label: t("male"),
                  value: "male",
                },
              ],
            }}
            recieveValue={(selectedItems) =>
              setData({
                ...data,
                sex: selectedItems.sex,
              })
            }
            value={data.sex}
          />
          <Dropdown
            id="age"
            listItems={{
              age: years,
            }}
            recieveValue={(selectedItems) =>
              setData({
                ...data,
                age: selectedItems.age,
              })
            }
            value={data.age}
          />
        </Box>
        <br />
        <Button variant="white" onClick={() => handleSubmitEditDetails(data)}>
          {t("save")}
        </Button>
      </Box>
    </Box>
  );
};

export default AuthAddDetails;

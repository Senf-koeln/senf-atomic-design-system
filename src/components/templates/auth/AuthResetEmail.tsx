/** @format */

import React, { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../atoms/buttons/Button";
import Box from "../../atoms/box/Box";
import { AuthResetEmailProps } from "./AuthResetEmail.types";
import { useFormik } from "formik";
import * as yup from "yup";
import Typography from "../../atoms/typography/Typography";
import Form from "../../molecules/form/Form";

const AuthResetEmail: FC<AuthResetEmailProps> = ({
  variant,
  loading,
  handleSubmitResetEmail,
}) => {
  const { t } = useTranslation();

  const inputItems = [{ name: "email", type: "email", placeholder: "E-Mail" }];

  const validationSchema = yup.object({
    email: yup
      .string()
      .required(t("enter_email"))
      .email(t("enter_valid_email")),
  });

  const formikStore = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    onSubmit: () => console.log("values"),
  });

  return (
    <Box
      flexDirection="column"
      margin="180px 10% 0px 10%"
      position="relative"
      zIndex={9999}
    >
      <Typography variant="h1" style={{ position: "relative" }}>
        {t("reset_header_1")}
      </Typography>
      <Typography variant="h1" style={{ position: "relative" }}>
        {t("reset_header_2")}
      </Typography>
      <Box margin="25px 0px 24px 0px">
        <Typography variant="bodyBg" style={{ position: "relative" }}>
          {t("reset_password")}
        </Typography>
      </Box>
      <Box gap="16px" flexDirection="column" width="100%">
        <Form width="100%" inputItems={inputItems} formik={formikStore} />
        <Button
          variant="white"
          fillWidth="max"
          text={t("reset")}
          loading={loading}
          onClick={() => handleSubmitResetEmail(formikStore)}
          disabled={formikStore?.isValid}
        />
      </Box>{" "}
    </Box>
  );
};

export default AuthResetEmail;

/** @format */

import { MouseEventHandler } from "react";
export interface AuthVerifyEmailProps {
  text?: string;
  variant?: "register" | "login";
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  formikRegisterStore?: Function;
  formikLoginStore?: Function;
  handleSubmitRegister?: Function;
  handleSubmitLogin?: Function;
}

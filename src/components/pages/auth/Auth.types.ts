/** @format */

import { MouseEventHandler } from "react";
export interface AuthProps {
  handleClose?: (x: boolean) => void;
  handleSubmitRegister?: any;
  registerLoading?: boolean;
  handleSubmitLogin?: any;
  loginLoading?: boolean;
  handleGoogleSignIn?: any;
  googleLoading?: boolean;
  handleFacebookSignIn?: any;
  facebookLoading?: boolean;
  resetLoading?: any;
  handleSubmitResetEmail?: any;
  socialLoginVerified?: boolean;
  emailRegistrationSubmitted?: boolean;
  emailVerified?: boolean;
}

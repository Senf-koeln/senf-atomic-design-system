/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { SocialmediaShareProps } from "./SocialmediaShare.types";
import { useTranslation } from "react-i18next";
import Typography from "../../atoms/typography/Typography";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import Facebook from "../../../assets/icons/Facebook";
import Mail from "../../../assets/icons/Mail";
import Box from "../../atoms/box/Box";
import WhatsApp from "../../../assets/icons/WhatsApp";
import {
  WhatsappShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share";
const Wrapper = styled.div<SocialmediaShareProps>``;

const SocialmediaShare: FC<SocialmediaShareProps> = ({
  path,
  handleShareIdeaVia,
}) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Typography variant="h3"> {t("share_link")}</Typography>
      <Box
        flexDirection="column"
        gap="5px"
        margin="8px 0px 0px 0px"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <WhatsappShareButton url={path}>
          <TertiaryButton
            text="WhatsApp"
            variant="medium"
            iconLeft={<WhatsApp />}
            // onClick={() => handleShareIdeaVia("WhatsApp", path)}
          />
        </WhatsappShareButton>
        <FacebookShareButton url={path}>
          <TertiaryButton
            text="Facebook"
            variant="medium"
            iconLeft={<Facebook />}
            // onClick={() => handleShareIdeaVia("Facebook", path)}
          />
        </FacebookShareButton>
        <EmailShareButton url={path}>
          <TertiaryButton
            text="Email"
            variant="medium"
            iconLeft={<Mail />}
            // onClick={() => handleShareIdeaVia("Email", path)}
          />
        </EmailShareButton>

        {/* <WhatsappShareButton url={path}>
          <TertiaryButton
            text="WhatsApp"
            variant="medium"
            iconLeft={
              <WhatsappIcon
                size={20}
                round={true}
                style={{ marginTop: "-2px", marginLeft: "-2px" }}
              />
            }
          />
        </WhatsappShareButton>

        <FacebookShareButton url={path}>
          <TertiaryButton
            text="Facebook"
            variant="medium"
            iconLeft={<Facebook />}
          />
        </FacebookShareButton>

        <EmailShareButton url={path}>
          <TertiaryButton text="Email" variant="medium" iconLeft={<Mail />} />
        </EmailShareButton> */}
      </Box>
    </Wrapper>
  );
};

export default SocialmediaShare;

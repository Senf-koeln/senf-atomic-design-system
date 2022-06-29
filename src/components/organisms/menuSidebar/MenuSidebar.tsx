/** @format */

import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styled from "styled-components";
import Bell from "../../../assets/icons/Bell";
import Info from "../../../assets/icons/Info";
import Insta from "../../../assets/icons/Insta";
import Mail from "../../../assets/icons/Mail";
import More from "../../../assets/icons/More";
import SenfLogoSmall from "../../../assets/icons/SenfLogoSmall";
import User from "../../../assets/icons/User";
import { openLink, openMail } from "../../../util/helpers";
import Box from "../../atoms/box/Box";
import Button from "../../atoms/buttons/Button";
import ContentDropdown from "../../atoms/contentDropdown/ContentDropdown";
import Divider from "../../atoms/divider/Divider";
import { MenuSidebarProps } from "./MenuSidebar.types";

const Wrapper = styled.div<MenuSidebarProps>`
  position: absolute;
  width: 50px;
  height: calc(100vh - 60px);
  padding: 20px 0px 20px 12px;
  left: 0;
  top: 0;
  z-index: 996;
  display: flex;
`;

// const ButtonPlacer = styled.div<OrganizationCardProps>`
//   box-sizing: border-box;
//   width: 50px;
//   height: 50px;
//   box-shadow: ${({ theme }) => theme.shadows[5]}
//       ${({ theme }) => theme.colors.brown.brown20tra},
//     ${({ theme }) => theme.shadows[3]}
//       ${({ theme }) => theme.colors.white.white20tra};
//   background-color: #faf8f3;
//   border-radius: 8px;
//   border: 2px solid rgba(255, 255, 255, 0.8);
//   position: absolute;
//   bottom: 0;
// `;

// const StyledDivider = styled.div<DividerProps>`
//   position: relative;
//   width: 2px;
//   height: 100%;
//   border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};

//   background-color: ${({ theme }) => theme.colors.brown.brown20tra};

//   margin: 0;
// `;
const lngs = {
  de: { nativeName: "🇩🇪 Deutsch", shortName: "DE" },
  en: { nativeName: "🇬🇧 English", shortName: "EN" },
};

const MenuSidebar: FC<MenuSidebarProps> = ({
  handleOpenMyAccount,
  setInfoPageOpen,
  setOrder,
}) => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <Wrapper>
      <Box
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        width="36px"
      >
        <Box gap="14px" flexDirection="column" width="36px">
          <Button
            variant="white"
            size="small"
            text={<SenfLogoSmall />}
            onClick={() => setOrder(1)}
          />

          {/* <Button variant="white" size="small" icon={<Bell />} /> */}

          <Button
            variant="white"
            size="small"
            icon={<Info />}
            onClick={() => setInfoPageOpen(true)}
          />
          <Button
            variant="white"
            size="small"
            icon={<User />}
            onClick={() => {
              handleOpenMyAccount(true);
            }}
          />
        </Box>

        <Box gap="14px" flexDirection="column" width="36px">
          <ContentDropdown
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            openButtonWidth="36px"
            OpenButton={
              <Button
                variant="white"
                size="small"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                text={Object.keys(lngs).map(
                  (lng) => i18n.resolvedLanguage === lng && lngs[lng].shortName
                )}
              />
            }
            Content={
              <Box gap="5px" flexDirection="column">
                {Object.keys(lngs).map((lng) => (
                  <Button
                    variant={
                      i18n.resolvedLanguage === lng ? "primary" : "secondary"
                    }
                    size="small"
                    text={lngs[lng].nativeName}
                    onClick={() => handleChangeLanguage(lng)}
                    // disabled={i18n.resolvedLanguage === lng}
                  />
                ))}
              </Box>
            }
          />
          <Divider />

          <Button
            variant="white"
            size="small"
            icon={<Mail />}
            onClick={() => openMail("dein@senf.koeln")}
          />
          <Button
            variant="white"
            size="small"
            icon={<Insta />}
            onClick={() => openLink("https://www.instagram.com/senf.koeln/")}
          />
        </Box>
      </Box>

      <Divider height="100%" width="2px" margin="0px 0px 0px 10px" />
    </Wrapper>
  );
};

export default MenuSidebar;

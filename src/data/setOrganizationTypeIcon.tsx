/** @format */
import React from "react";
import Initiativen from "../assets/icons/Initiativen";
import Politik from "../assets/icons/Politik";
import Vereine from "../assets/icons/Vereine";
import Stadtverwaltung from "../assets/icons/Stadtverwaltung";
import Presse from "../assets/icons/Presse";
import AllOrganizationTypes from "../assets/icons/AllOrganizationTypes";
import Planungsbüros from "../assets/icons/Planungsbüros";
import Dot from "../assets/icons/Dot";

const setOrganizationTypeIcon = (name) => {
  let icon;
  switch (name) {
    case "Initiativen":
      icon = <Initiativen />;
      break;
    case "Vereine":
      icon = <Vereine />;
      break;
    case "Politik":
      icon = <Politik />;
      break;
    case "Stadtverwaltung":
      icon = <Stadtverwaltung />;
      break;
    case "Presse":
      icon = <Presse />;
      break;
    case "Planungsbüros":
      icon = <Planungsbüros />;
      break;
    default:
      icon = <Dot />;
  }
  return icon;
};

export default setOrganizationTypeIcon;

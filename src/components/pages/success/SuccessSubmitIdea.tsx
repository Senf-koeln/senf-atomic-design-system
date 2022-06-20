/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import Wave from "../../atoms/shapes/Wave";
import Modal from "../../molecules/modals/Modal";
import { SuccessSubmitIdeaProps } from "./SuccessSubmitIdea.types";

import SenfManCelebrating from "../../../assets/illustrations/SenfManCelebrating.png";
import Typography from "../../atoms/typography/Typography";
import Box from "../../atoms/box/Box";
import Accordion from "../../molecules/accordion/Accordion";
import Success from "../../templates/success/Success";

import RoundedButton from "../../atoms/buttons/RoundedButton";
import Plus from "../../../assets/icons/Plus";
import { InlineWidget } from "react-calendly";
import Button from "../../atoms/buttons/Button";
import SwipeModal from "../../molecules/modals/SwipeModal";
import theme from "../../../styles/theme";

const Wrapper = styled.div<SuccessSubmitIdeaProps>`
  height: 500px;
`;

const Img = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-80px, 0);
  top: 11px;
  width: 226px;
  z-index: 1;
  pointer-events: none;
  user-select: none;
`;

const SuccessSubmitIdea: FC<SuccessSubmitIdeaProps> = ({}) => {
  const [order, setOrder] = useState(1);
  const setOpenModal = () => {};
  return (
    <SwipeModal
      openModal={true}
      setOpenModal={setOpenModal}
      zIndex="999999999"
      backgroundColor={theme.colors.beige.beige20}
    >
      <Box margin="24px" position="fixed" zIndex={999} top="0">
        <RoundedButton
          icon={<Plus transform="rotate(45deg)" />}
          onClick={() => setOrder(1)}
          variant={order === 1 ? "white" : "primary"}
        />
      </Box>
      {order === 1 ? (
        <Success setOrder={setOrder} />
      ) : (
        <React.Fragment>
          {/* <Box
              margin="100px 100px 24px 24px"
              flexDirection="column"
              gap="10px"
            >
              <Typography variant="h2">Werde aktiv!</Typography>
              <Typography variant="p">
                Die Kölner Freiwilligenagentur e.V. berät euch gerne, wenn ihr
                in der Stadtentwicklung aktiv werden möchtet
              </Typography>
              <Button
                variant="secondary"
                text="zum Organisationsprofil"
                fillWidth="150px"
              />
              <Typography variant="h3">FAQ</Typography>

              <Accordion
                data={[
                  {
                    header: "What happens to the ideas?",
                    body: "The ideas received are submitted to the city administration by the urban planners:inside from our team, through which we have entered into a constructive dialogue with the administration on how the ideas can be implemented in the processes. As an interface between the citizens and the city administration, we bring the results of the applications to the public via Instagram. The first requests have already been included in the planning. For example, one of the most popular streets in Cologne, Zülpicher Straße, is to become car-free in a central section. It is particularly pleasing to see that our publications of feedback from the respective offices via our Instagram channel are also welcomed by users, even if with negative results. On the part of the Bürger:innen and the administration, it has already been expressed that we are using Senf.koeln to ensure greater understanding and closer partnership and transparent communication on both sides.",
                  },
                  {
                    header: "What happens when the header is a super long text",
                    body: "body",
                  },
                  { header: "header", body: "body" },
                  { header: "header", body: "body" },
                  { header: "header", body: "body" },
                ]}
              />
            </Box>
            <div style={{ width: "400px" }}>
              <InlineWidget url="https://calendly.com/senf-appointments/30min?month=2022-06" />
            </div> */}

          <InlineWidget url="https://calendly.com/senf-appointments/60min?month=2022-06" />
        </React.Fragment>
      )}
    </SwipeModal>
  );
};

export default SuccessSubmitIdea;

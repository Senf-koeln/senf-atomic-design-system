/** @format */

import React, { memo, useState, FC } from "react";
import styled from "styled-components";
import { AccordionProps } from "./Accordion.types";
import { useSpring, a, animated } from "@react-spring/web";
import { usePrevious } from "../../../hooks/usePrevious";
import { useMeasure } from "../../../hooks/useMeasure";
import Linkify from "linkify-react";
import Typography from "../../atoms/typography/Typography";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Icon from "../../atoms/icons/Icon";

const AccordionWrapper = styled.ul<AccordionProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 30rem;
  padding: 20px;
  overflow: hidden;
  .accordion-item {
    border-top: 1px solid ${({ theme }) => theme.colors.brown.brown20tra};
  }
  .accordion-item-line {
    display: block;
    padding: 0.8rem 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    position: relative;
  }

  .accordion-item-inner {
    max-height: 0;
    overflow: hidden;
    z-index: 1;
    position: relative;
  }
  .accordion-item-content {
    padding-bottom: 20px;
  }
`;

export const AccordionItem = memo(({ header, body, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 /*transform: 'rotate(180deg)'*/ },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      // transform: `rotate(${isOpen ? 0 : 180}deg)`
    },
  });

  return (
    <li
      className="accordion-item"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className="accordion-item-line">
        <Typography variant="h3" style={{ maxWidth: "90%" }}>
          {header}
        </Typography>

        <Icon
          icon="arrowDown"
          style={{
            ...(isOpen && {
              transform: "rotate(180deg)",
            }),
          }}
        />
      </div>
      <a.div
        style={{
          willChange: "transform, opacity, height",
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <div {...bind} className="accordion-item-content">
          <FlexWrapper margin="0px 0px 20px 0px">
            <Typography variant="bodyBg">
              <Linkify
                options={{
                  target: "_blank",
                  //tagName: props => <a {...props} />,
                  tagName: (...args) =>
                    console.log(args) || ((props) => <a {...props} />),
                }}
              >
                {body}
              </Linkify>
            </Typography>
          </FlexWrapper>
        </div>
      </a.div>
    </li>
  );
});

const Accordion: FC<AccordionProps> = ({ data }) => {
  return (
    <AccordionWrapper>
      {data.map(({ header, body }) => {
        console.log(data);
        return <AccordionItem key={header} header={header} body={body} />;
      })}
    </AccordionWrapper>
  );
};

export default Accordion;

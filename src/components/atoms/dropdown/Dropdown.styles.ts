/** @format */

import styled from "styled-components";
import arrow from "../../../assets/rawSvgs/arrow.svg";

export const Selector = styled.select`
  flex: 1;
  border: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("${arrow}");
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem);
  background-size: 0.9rem;

  &:focus {
    outline: 0;
  }
  &:focus-visible {
    outline: 0;
  }
`;

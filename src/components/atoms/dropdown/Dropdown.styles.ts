import styled from "styled-components";
import arrow from "../../../assets/rawSvgs/arrow.svg"


export const Selector = styled.select`
  border: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("${arrow}");
  background-repeat: no-repeat;
  background-position: 98%;
  background-size: 1rem;

  &:focus {
    outline: 0;
  }
  &:focus-visible {
    outline: 0;
  }
`;

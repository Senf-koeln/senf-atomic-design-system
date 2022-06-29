/** @format */

import styled, { css } from "styled-components";

export const HoverContainer = styled.div`
  padding: 0.35rem;
  &:hover {
    border-radius: ${({ theme }) => theme.radii[0]}px;
    background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  }
`;

export const Wrapper = styled.div<{ disabled?: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.black.black40tra};
  width: 100%;

  opacity: ${({ disabled }) => disabled && "0.5"};
`;

export const Label = styled.label<{ error?: boolean }>`
  align-self: flex-start;
  flex: auto;
  color: ${({ theme, error }) => error && theme.colors.signal.redDark};

  font-size: ${({ theme }) => theme.fontSizes[1]}rem;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  line-height: ${({ theme }) => theme.lineHeight[0]};
`;

export const Note = styled.p<{ error?: boolean }>`
  align-self: flex-end;
  flex: auto;
  color: ${({ theme, error }) => error && theme.colors.signal.redDark};

  font-size: ${({ theme }) => theme.fontSizes[0]}rem;
  text-align: end;
  line-height: ${({ theme }) => theme.lineHeight[2]};
  flex-basis: 7rem;
`;

export const InputField = styled.div<{ focus: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.6rem 0 0.9rem;
  min-height: 50px;
  color: rgb(51, 51, 51) !important;
  background-color: ${({ theme }) => theme.colors.white.white50tra};
  border-radius: ${({ theme }) => theme.radii[1]}px;
  -webkit-border-radius: ${({ theme }) => theme.radii[1]}px;
  -moz-border-radius: ${({ theme }) => theme.radii[1]}px;

  ${({ focus }) =>
    focus &&
    css`
      outline: 3px solid ${({ theme }) => theme.colors.primary.primary120};
      outline-offset: -3px;
    `}

  input {
    max-height: 50px !important;
  }

  /* Styles for textarea */
  textarea {
    padding: 0.7rem 0rem 0.7rem 0rem;
    resize: none;
  }

  /* Styles for password input */
  /* button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary.primary140};
    font-weight: ${({ theme }) => theme.fontWeights[1]};
  } */

  /* Styles for search input */
  svg {
    opacity: 0.8;
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.black.black100};
  }
`;

export const TextField = styled.input`
  font-size: ${({ theme }) => theme.fontSizes[2]}rem;
  border: 0;
  flex: 1;
  background-color: transparent !important;

  /* Styles for search input */
  /* &[type="search"] {
    & + ${HoverContainer} > svg {
      display: block;
      transform: rotateZ(45deg) scale(0.7);
      cursor: pointer;
    }
    :placeholder-shown {
      & + ${HoverContainer} > svg {
        display: none;
      }
    } 
  }*/

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.black.black40tra};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.black.black40tra};
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  &:focus {
    outline: 0;
  }
  &:focus-visible {
    outline: 0;
  }
`;

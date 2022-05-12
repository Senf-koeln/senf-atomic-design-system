import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.black.black40tra};

  opacity: ${({ disabled }) => disabled && "0.5"};
`;

export const Indication = styled.div<{ error?: boolean }>`
  display: flex;
  justify-content: space-between;
  color: ${({ theme, error }) => error && theme.colors.signal.redDark};
  label {
    font-size: ${({ theme }) => theme.fontSizes[1]}rem;
    font-weight: ${({ theme }) => theme.fontWeights[1]};
    line-height: ${({ theme }) => theme.lineHeight[0]};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes[0]}rem;
    text-align: end;
    line-height: ${({ theme }) => theme.lineHeight[2]};
    flex-basis: 7rem;
  }
`;

export const InputField = styled.div<{ focus: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: ${({ theme }) => theme.radii[1]}px;
  ${({ focus }) =>
    focus &&
    css`
      outline: 3px solid ${({ theme }) => theme.colors.primary.primary120};
      outline-offset: -3px;
    `}

  /* Styles for textarea */
  textarea {
    resize: none;
  }

  /* Styles for password input */
  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary.primary140};
  }

  /* Styles for search input */
  svg {
    opacity: 0.3;
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.black.black100};
  }
`;

export const TextField = styled.input`
  /* font-size: ${({ theme }) => theme.fontSizes[2]}rem; */
  border: 0;
  flex: 1;
  background-color: transparent;
  color: rgb(51, 51, 51);

  /* Styles for search input */
  &[type="search"] {
    & + svg {
      display: block;
      transform: rotateZ(45deg);
      cursor: pointer;
    }
    :placeholder-shown {
      & + svg {
        display: none;
      }
    }
  }

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
  &:focus-visible {
    outline: 0;
  }
`;

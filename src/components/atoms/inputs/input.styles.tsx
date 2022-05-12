import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.black.black40tra};

  opacity: ${({ disabled }) => disabled && "0.5"};
`;

export const Indication = styled.div<{ error?: boolean }>`
  display: inline-flex;
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

export const InputField = styled.div`
  display: flex;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  ${({ focus }) =>
    focus &&
    css`
      outline: 3px solid ${({ theme }) => theme.colors.primary.primary120};
      outline-offset: -3px;
    `}

  textarea {
    resize: none;
  }
  button {
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary.primary140};
    padding: 0.5rem;
  }
`;

export const TextField = styled.input`
  /* font-size: ${({ theme }) => theme.fontSizes[2]}rem; */
  border: 0;

  padding: 0.5rem 0 0.5rem 1rem;
  background-color: transparent;
  color: rgb(51, 51, 51);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.black.black40tra};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.black.black40tra};
  }

  &:focus-visible {
    outline: 0;
  }
`;

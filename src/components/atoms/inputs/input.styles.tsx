import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.colors.primary.primary120};
    outline-offset: -3px;
  }
`;

export const Indication = styled.div`
  display: inline-flex;
`;

export const InputField = styled.div`
  display: inline-flex;
`;

export const TextField = styled.input`
  border: 0;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  background-color: rgba(255, 255, 255, 0.5);

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.colors.primary.primary120};
    outline-offset: -3px;
  }
`;

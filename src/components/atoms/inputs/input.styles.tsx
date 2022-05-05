import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
  color: ${({theme}) => theme.colors.black.black40tra};
  max-width: 13rem;
  &:focus {
    outline: 3px solid ${(props) => props.theme.colors.primary.primary120};
    outline-offset: -3px;
  }
`;

export const Indication = styled.div`
  display: inline-flex;
  justify-content: space-between;
  label {
    font-size: ${({theme}) => theme.fontSizes[1]}rem;
    font-weight: ${({theme}) => theme.fontWeights[1]};
    line-height: ${({theme}) => theme.lineHeight[0]};
  }

  p {
    font-size: ${({theme}) => theme.fontSizes[0]}rem;
    line-height: ${({theme}) => theme.lineHeight[2]};
    flex-basis: 7rem;
  }
`;

export const InputField = styled.div`
  display: inline-flex;
`;

export const TextField = styled.input`
  border: 0;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(51, 51, 51);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({theme}) => theme.colors.black.black40tra};
  }
  :-ms-input-placeholder {
    color: ${({theme}) => theme.colors.black.black40tra};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.colors.primary.primary120};
    outline-offset: -3px;
  }
`;

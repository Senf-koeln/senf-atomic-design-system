/** @format */

import React from "react";
import styled, { css } from "styled-components";
// import enterAnimation from "../../../shared/animations";
// import plopAnimation from "../../../shared/animations";
// import dot from "../../../shared/dot.svg";
// import "../../../shared/styles";
// import * as Styles from "../../../shared/styles";

const ButtonBase = css`
  box-sizing: border-box;
  width: 129px;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 10px 14px 10px;
  box-shadow: 0px 12px 18px -10px rgba(235, 184, 0, 0.5);
  background-color: #fed957;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgba(170, 150, 80, 0.1);
  position: ${(props) => props.position && props.position};
  left: ${(props) => props.left && props.left};
  top: ${(props) => props.top && props.top};
  right: ${(props) => props.right && props.right};
  bottom: ${(props) => props.bottom && props.bottom};
  z-index: ${(props) => props.zIndex};
  &:hover {
    background-color: #f5c70e;
  }
`;

export const largeStyle = css`
  width: 164px;
  height: 50px;
  padding: 14px 18px 14px 18px;
`;

const StyledButton = styled.button`
  ${ButtonBase}
  ${(props) => props.size === "small" && ButtonBase}
  ${(props) => props.size === "large" && largeStyle}
`;
const StyledText = styled.p`
  width: 84px;
  height: 16px;
  flex-shrink: 0;
  white-space: pre;
  overflow: hidden;
  font-weight: 700;
  font-style: normal;
  font-family: Nunito, serif;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size,
  handleButtonClick,
  position,
  left,
  top,
  right,
  bottom,
  zIndex,
  icon,
  text,
}) => {
  return (
    <StyledButton
      size={size}
      onClick={handleButtonClick}
      position={position}
      left={left}
      top={top}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
    >
      {/* {icon && <img src={dot} />} */}
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

// Button.propTypes = {
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(["small", "large"]),

//   /**
//    * Optional click handler
//    */
//   handleButtonClick: PropTypes.func,
//   position: PropTypes.string,
//   left: PropTypes.string,
//   top: PropTypes.string,
//   right: PropTypes.string,
//   bottom: PropTypes.string,
//   zIndex: PropTypes.number,
//   icon: PropTypes.bool,

//   /**
//    * Button contents
//    */
//   text: PropTypes.string.isRequired,
// };

// Button.defaultProps = {};
export default Button;

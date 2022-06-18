/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { ImagePlaceholderProps } from "./ImagePlaceholder.types";

const Wrapper = styled.div<ImagePlaceholderProps>`
  position: relative;
  box-sizing: border-box;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;

  ${({ layerStyle }) => (layerStyle ? layerStyle : null)}
`;

const Thumbnail = styled.div<ImagePlaceholderProps>`
  width: 100%;
  padding-bottom: 100%;
  overflow: visible;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  img,
  width,
  height,
  borderRadius,
  layerStyle,
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      layerStyle={layerStyle}
    >
      <Thumbnail img={img} />
    </Wrapper>
  );
};

export default ImagePlaceholder;

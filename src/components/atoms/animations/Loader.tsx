/** @format */

import React, { FC, useRef, useEffect } from "react";
import { LoaderProps } from "./Loader.types";
import styled from "styled-components";
import lottie from "lottie-web";

const StyledLoader = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  position: relative;
  transform: scale(1.5);
`;
const Loader: FC<LoaderProps> = ({ width, height }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../assets/lottieFiles/dotLoader.json"),
    });
  }, []);

  return <StyledLoader height={height} width={width} ref={container} />;
};

export default Loader;

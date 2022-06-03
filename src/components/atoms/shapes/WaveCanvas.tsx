/** @format */

import React from "react";

const WaveCanvas = ({ canvasRef, props }) => {
  return (
    <canvas
      id="wave"
      style={{
        transform: "rotate(-6deg) translateX(-50px)",
        display: "block",
        width: "150%",
        height: "1570px",
        top: props.top,
        position: props.position ? props.position : "absolute",
        opacity: 1,
        zIndex: 0,
        pointerEvents: "none",
        transition: "2s",
      }}
      ref={canvasRef}
      {...props}
    />
  );
};

export default WaveCanvas;

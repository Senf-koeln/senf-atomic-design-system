/** @format */

import React from "react";

const WaveCanvas = ({ canvasRef, props }) => {
  return (
    <canvas
      id="wave"
      style={{
        transform: "rotate(-6deg) translateX(-50px)",
        display: "block",
        width: "490px",
        height: "870px",
        top: "170px",
        position: "absolute",
        opacity: 1,
        zIndex: 0,
        pointerEvents: "none",
      }}
      ref={canvasRef}
      {...props}
    />
  );
};

export default WaveCanvas;

/** @format */

import React, { memo } from "react";

const WaveCanvas = ({ canvasRef, props }) => {
  return (
    <canvas
      id="wave"
      style={{
        transform: "rotate(-6deg) translateX(-50px)",
        display: "block",
        width: "150%",
        height: "1570px",

        opacity: 1,
      }}
      ref={canvasRef}
      {...props}
    />
  );
};

export default memo(WaveCanvas);

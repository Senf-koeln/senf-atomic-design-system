/** @format */

import React, { useRef, useEffect, memo, useCallback } from "react";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import WaveCanvas from "./WaveCanvas";

const Wave = (props) => {
  const { devicePixelRatio: ratio = 1 } = window;
  const waveTotal = isMobileCustom() ? 12 : 30;
  const waveHeight = 50;
  const waveSpeed = 0.1;

  const contextRef = useRef(null);
  const canvasRef = useRef(null);
  const nodesRef = useRef(null);

  const setWaveNodes = () => {
    const offSetNodes = waveTotal + 2;
    return [...Array(offSetNodes)].map((_, index) => [
      ((index - 1) * window.innerWidth) / waveTotal,
      0,
      Math.random() * waveHeight,
      waveSpeed,
    ]);
  };

  nodesRef.current = setWaveNodes();

  function drawWave() {
    const wave = nodesRef.current;
    const ctx = contextRef.current;

    const diff = function (a, b) {
      return (b - a) / 2 + a;
    };

    // Wave gradient
    const gradient = ctx.createRadialGradient(100, 0, 500, 100, 250, 1500);
    gradient.addColorStop(0, props.color);
    gradient.addColorStop(0.25, props.color);
    gradient.addColorStop(0.6, props.color);
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height);

    // First  wave node
    ctx.lineTo(wave[0][0], wave[0][1]);

    for (var i = 0; i < wave.length; i++) {
      if (wave[i + 1]) {
        ctx.quadraticCurveTo(
          wave[i][0],
          wave[i][1],
          diff(wave[i][0], wave[i + 1][0]),
          diff(wave[i][1], wave[i + 1][1])
        );
      } else {
        // Last wave node
        ctx.lineTo(wave[i][0], wave[i][1]);
        ctx.lineTo(window.innerWidth, ctx.canvas.height);
      }
    }
    ctx.closePath();
    ctx.fill();
  }
  const draw = useCallback(() => {
    const ctx = contextRef.current;

    ctx.clearRect(0, 0, window.innerWidth, contextRef.current.canvas.height);

    // Update nodesRef
    // [0] node x pos
    // [1] node y pos
    // [2] node strength
    // [3] node speed

    nodesRef.current = nodesRef.current.map((node, index) => [
      node[0],
      (waveHeight / 2) * Math.sin(node[2] / 15) +
        ctx.canvas.height / (2 * ratio) -
        (ctx.canvas.height / ratio) * 0.45 +
        waveHeight / 6,
      node[2] + node[3],
      node[3],
    ]);

    drawWave();
  }, []);

  function resizeCanvasToDisplaySize(canvas) {
    const { width } = canvasRef.current.getBoundingClientRect();

    if (window.innerWidth !== width) {
      const { devicePixelRatio: ratio = 1 } = window;

      canvasRef.current.width = window.innerWidth * ratio;
      canvasRef.current.height = waveHeight * ratio;
      contextRef.current.scale(ratio, ratio);

      nodesRef.current = nodesRef.current.map((node, index) => [
        ((index - 1) * window.innerWidth) / waveTotal,
        node[1],
        node[2],
        node[3],
      ]);
    }

    return false;
  }

  function sizeCanvas() {
    const { width, height } = canvasRef.current.getBoundingClientRect();

    if (
      canvasRef.current.width !== width ||
      canvasRef.current.height !== height
    ) {
      const { devicePixelRatio: ratio = 1 } = window;
      canvasRef.current.width = width * ratio * 0.4;
      canvasRef.current.height = height * ratio;
      contextRef.current.scale(ratio, ratio);
      return true;
    }

    return false;
  }

  useEffect(() => {
    // Set up canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set context ref
    contextRef.current = context;

    // Size canvas with devicePixelRatio
    sizeCanvas();
  }, []);

  useEffect(() => {
    let animationFrameId;

    //Animation frame
    const render = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    // window.addEventListener("resize", resizeCanvasToDisplaySize);

    // return () => {
    //   window.cancelAnimationFrame(animationFrameId);
    //   window.removeEventListener("resize", resizeCanvasToDisplaySize);
    // };
  }, [draw]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        top: props.top,
        position: props.position ? props.position : "absolute",
        zIndex: 0,
        pointerEvents: "none",
        transition: "2s",
      }}
    >
      <WaveCanvas canvasRef={canvasRef} props={props} />
    </div>
  );
};

export default memo(Wave);

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Canvas = () => {
  let canvas;
  let canvasRef = useRef(null);

  const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
  };

  useEffect(() => {
    canvas = canvasRef.current;
    canvas.addEventListener("mousemove", onMouseMove);
  }, []);

  return <CanvasDiv ref={canvasRef}></CanvasDiv>;
};

const CanvasDiv = styled.div`
  background-color: ${theme.color.white};
  margin: 50px auto 50px auto;
  width: 700px;
  height: 700px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default Canvas;

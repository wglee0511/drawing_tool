import React, {  useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Canvas = (props) => {
  const { line, color, canvasSize } = props;

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setContext] = useState();

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
  };

  const handleStopPainting = () => {
    setIsDrawing(() => false);
  };
  const handleStartDrawing = (event) => {
    setIsDrawing(() => true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasSize[0];
    canvas.height = canvasSize[1];

    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.lineWidth = line;
    contextRef.current = context;

    setContext(() => contextRef.current);
  }, [line, color]);


  return (
    <CanvasDiv
      onMouseMove={onMouseMove}
      onTouchStart={handleStartDrawing}
      onTouchEnd={handleStopPainting}
      onTouchMove={onMouseMove}

      onMouseDown={handleStartDrawing}
      onMouseUp={handleStopPainting}
      onMouseLeave={handleStopPainting}
      ref={canvasRef}
    />
  );
};

const CanvasDiv = styled.canvas`
  background-color: ${theme.color.white};
  margin: 50px auto 50px auto;
  width: 700px;
  height: 700px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default Canvas;

import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const Canvas = (props) => {
  const { line, color, canvasSize } = props;
  const lineContext = useContext(LineDataContext);
  const { canvasRef, setImageArr, setIndex, arrIndex, imageArr, lineType } =
    lineContext;

  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color ? color : "black";
    ctx.lineWidth = line ? line : 2.5;

    if (ctx) {
      if (lineType === theme.type.normal) {
        if (!isDrawing) {
          ctx.beginPath();
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
    }
  };

  const handleStopPainting = (event) => {
    event.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    if (isDrawing) {
      if (lineType === theme.type.line) {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
    setIsDrawing(false);
    if (event.type !== "mouseout") {
      const imageData = contextRef.current.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const lastIndex = imageArr.length - 1;
      if (lastIndex !== arrIndex) {
        const newArr = imageArr.splice(0, arrIndex + 1);
        setImageArr(() => [...newArr, imageData]);
        setIndex((prev) => (prev += 1));
      } else {
        setImageArr((prev) => [...prev, imageData]);
        setIndex((prev) => (prev += 1));
      }
    }
  };
  const handleStartDrawing = (event) => {
    event.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    if (!isDrawing) {
      if (lineType === theme.type.line) {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
    setIsDrawing(true);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvasSize[0];
      canvas.height = canvasSize[1];

      const context = canvas.getContext("2d");
      contextRef.current = context;
    }
  }, []);

  return (
    <CanvasDiv
      ref={canvasRef}
      onMouseMove={onMouseMove}
      onMouseDown={handleStartDrawing}
      onMouseUp={handleStopPainting}
      onMouseOut={handleStopPainting}
      onTouchStart={handleStartDrawing}
      onTouchEnd={handleStopPainting}
      onTouchMove={onMouseMove}
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

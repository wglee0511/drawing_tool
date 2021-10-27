import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";

const DoController = (props) => {
  const { color } = props;
  const lineContext = useContext(LineDataContext);
  const { canvasRef, setImageArr, setIndex, arrIndex, imageArr } = lineContext;

  const ctx = canvasRef.current?.getContext("2d");
  const canvas = canvasRef.current;

  const handleClear = () => {
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setImageArr([]);
    setIndex(-1);
  };
  const handleUndo = () => {};
  const handleRedo = () => {};

  return (
    <Wrapper>
      <Btn onClick={handleClear}>Clear</Btn>
      <Btn onClick={handleUndo}>Undo</Btn>
      <Btn onClick={handleRedo}>Redo</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
export default DoController;

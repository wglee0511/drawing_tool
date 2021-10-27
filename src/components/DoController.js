import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const DoController = () => {
  const lineContext = useContext(LineDataContext);
  const { canvasRef, setImageArr, setIndex, arrIndex, imageArr } = lineContext;

  const ctx = canvasRef.current?.getContext("2d");
  const canvas = canvasRef.current;

  const handleClear = () => {
    ctx.fillStyle = theme.color.white;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setImageArr([]);
    setIndex(-1);
  };
  const handleUndo = () => {
    if (arrIndex == 0) {
      ctx.fillStyle = theme.color.white;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setIndex((prev) => (prev -= 1));
    } else if (arrIndex == -1) {
      return;
    } else {
      const newIndex = arrIndex - 1;
      setIndex((prev) => (prev -= 1));
      const newArr = imageArr.slice(0, arrIndex);

      ctx.putImageData(newArr[newIndex], 0, 0);
    }
  };
  const handleRedo = () => {
    const lastIndex = imageArr.length - 1;
    if (lastIndex === arrIndex) {
      return;
    }

    const newIndex = arrIndex + 1;
    setIndex((prev) => (prev += 1));
    const newArr = imageArr.slice(0, arrIndex + 2);

    ctx.putImageData(newArr[newIndex], 0, 0);
  };

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

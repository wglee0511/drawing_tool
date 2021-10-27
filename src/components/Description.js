import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const Description = () => {
  const lineContext = useContext(LineDataContext);
  const {
    canvasRef,
    handlePointClick,
    setImageArr,
    setIndex,
    arrIndex,
    imageArr,
    lineType,
  } = lineContext;

  const messageMaker = (type) => {
    if (type === theme.type.line) {
      return "직선을 이을 두개의 선을 클릭하세요.";
    }
  };

  return (
    <Wrapper>
      <Btn>{messageMaker(lineType)}</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Btn = styled.button`
  display: flex;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default Description;

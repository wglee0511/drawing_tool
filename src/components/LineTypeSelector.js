import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const LineTypeSelector = () => {
  const lineContext = useContext(LineDataContext);
  const { lineType, setLineType } = lineContext;
  return (
    <Wrapper>
      <Btn
        onClick={() => setLineType(theme.type.normal)}
        isClicked={lineType === theme.type.normal ? true : false}
      >
        {theme.type.normal}
      </Btn>
      <Btn
        onClick={() => setLineType(theme.type.line)}
        isClicked={lineType === theme.type.line ? true : false}
      >
        {theme.type.line}
      </Btn>
      <Btn
        onClick={() => setLineType(theme.type.arc)}
        isClicked={lineType === theme.type.arc ? true : false}
      >
        {theme.type.arc}
      </Btn>
      <Btn
        onClick={() => setLineType(theme.type.circle)}
        isClicked={lineType === theme.type.circle ? true : false}
      >
        {theme.type.circle}
      </Btn>
      <Btn
        onClick={() => setLineType(theme.type.rect)}
        isClicked={lineType === theme.type.rect ? true : false}
      >
        {theme.type.rect}
      </Btn>
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
  ${(props) =>
    props.isClicked
      ? `  width: 120px;
  height: 60px;`
      : `  width: 100px;
  height: 50px;`}
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default LineTypeSelector;

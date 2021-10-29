import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const LineTypeSelector = () => {
  const lineContext = useContext(LineDataContext);
  const { lineType, setLineType, setPoints, setCountPoint } = lineContext;
  return (
    <Wrapper>
      <Btn
        onClick={() => setLineType(theme.type.normal)}
        isClicked={lineType === theme.type.normal ? true : false}
      >
        {theme.type.normal}
      </Btn>
      <Btn
        onClick={() => {
          setLineType(theme.type.line);
          setCountPoint(0);
          setPoints([]);
        }}
        isClicked={lineType === theme.type.line ? true : false}
      >
        {theme.type.line}
      </Btn>
      <Btn
        onClick={() => {
          setLineType(theme.type.arc);
          setCountPoint(0);
          setPoints([]);
        }}
        isClicked={lineType === theme.type.arc ? true : false}
      >
        {theme.type.arc}
      </Btn>
      <Btn
        onClick={() => {
          setLineType(theme.type.circle);
          setCountPoint(0);
          setPoints([]);
        }}
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
      <Btn
        onClick={() => {
          setLineType(theme.type.tri);
          setCountPoint(0);
          setPoints([]);
        }}
        isClicked={lineType === theme.type.tri ? true : false}
      >
        {theme.type.tri}
      </Btn>
      <Btn
        onClick={() => {
          setLineType(theme.type.poly);
          setCountPoint(0);
          setPoints([]);
        }}
        isClicked={lineType === theme.type.poly ? true : false}
      >
        {theme.type.poly}
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

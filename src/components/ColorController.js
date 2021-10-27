import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const ColorController = (props) => {
  const { setColor } = props;
  const [nowColor, setNowColor] = useState(theme.color.black);

  return (
    <Wrapper>
      <Color
        color={theme.color.black}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.black);
          setNowColor(theme.color.black);
        }}
      />
      <Color
        color={theme.color.white}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.white);
          setNowColor(theme.color.white);
        }}
      />
      <Color
        color={theme.color.red}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.red);
          setNowColor(theme.color.red);
        }}
      />
      <Color
        color={theme.color.orange}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.orange);
          setNowColor(theme.color.orange);
        }}
      />
      <Color
        color={theme.color.yellow}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.yellow);
          setNowColor(theme.color.yellow);
        }}
      />
      <Color
        color={theme.color.green}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.green);
          setNowColor(theme.color.green);
        }}
      />
      <Color
        color={theme.color.sky}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.sky);
          setNowColor(theme.color.sky);
        }}
      />
      <Color
        color={theme.color.blue}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.blue);
          setNowColor(theme.color.blue);
        }}
      />
      <Color
        color={theme.color.purple}
        nowColor={nowColor}
        onClick={() => {
          setColor(theme.color.purple);
          setNowColor(theme.color.purple);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Color = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  ${(props) =>
    props.color === props.nowColor
      ? `
   width: 70px;
  height: 70px;
  `
      : `
   width: 50px;
  height: 50px;
  `}
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default ColorController;

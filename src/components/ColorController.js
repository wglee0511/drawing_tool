import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const ColorController = (props) => {
  const { setColor } = props;

  const onColorChange = (color) => {
    let targetColor;
    if (color === "black") {
      targetColor = theme.color
      
    } else if {

    }
  }

  return (
    <Wrapper>
      <Color
        color={theme.color.black}
        onClick={() => setColor(() => theme.color.black)}
      />
      <Color
        color={theme.color.white}
        onClick={() => setColor(() => theme.color.white)}
      />
      <Color
        color={theme.color.red}
        onClick={() => setColor(() => theme.color.red)}
      />
      <Color
        color={theme.color.orange}
        onClick={() => setColor(() => theme.color.orange)}
      />
      <Color
        color={theme.color.yellow}
        onClick={() => setColor(() => theme.color.yellow)}
      />
      <Color
        color={theme.color.green}
        onClick={() => setColor(() => theme.color.green)}
      />
      <Color
        color={theme.color.sky}
        onClick={() => setColor(() => theme.color.sky)}
      />
      <Color
        color={theme.color.blue}
        onClick={() => setColor(() => theme.color.blue)}
      />
      <Color
        color={theme.color.purple}
        onClick={() => setColor(() => theme.color.purple)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Color = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default ColorController;

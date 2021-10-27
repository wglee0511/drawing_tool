import React from "react";
import styled from "styled-components";
import ColorController from "./ColorController";
import DoController from "./DoController";
import LineController from "./LineController";

const Controller = (props) => {
  const { setLine, setColor, line, color } = props;

  return (
    <Controls>
      <LineController setLine={setLine} line={line} />
      <DoController color={color} />
      <ColorController setColor={setColor} />
    </Controls>
  );
};

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Controller;

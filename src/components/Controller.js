import React from "react";
import styled from "styled-components";
import ColorController from "./ColorController";
import LineController from "./LineController";

const Controller = (props) => {
  const { setLine, setColor, line } = props;

  return (
    <Controls>
      <LineController setLine={setLine} line={line} />
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

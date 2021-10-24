import React from "react";
import styled from "styled-components";
import ColorController from "./ColorController";
import LineController from "./LineController";

const Controller = (props) => {
  return (
    <Controls>
      <LineController />
      <ColorController />
    </Controls>
  );
};

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Controller;

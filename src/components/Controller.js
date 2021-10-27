import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";
import ColorController from "./ColorController";
import Description from "./Description";
import DoController from "./DoController";
import LineController from "./LineController";
import LineTypeSelector from "./LineTypeSelector";

const Controller = (props) => {
  const { setLine, setColor, line, color } = props;
  const lineContext = useContext(LineDataContext);
  const { lineType } = lineContext;

  return (
    <Controls>
      <LineController setLine={setLine} line={line} />
      <DoController color={color} />
      <LineTypeSelector />
      <Description />
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

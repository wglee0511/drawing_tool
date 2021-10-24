import React from "react";
import styled from "styled-components";

const LineController = (props) => {
  return <Input type="range" min="0.1" max="5.0" value="2.5" step="0.1" />;
};

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LineController;

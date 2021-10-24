import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const LineController = (props) => {
  const { setLine, line } = props;
  let input;
  let inputRef = useRef(null);
  const handleLineChange = (event) => {
    const size = event.target.value;
    setLine(() => size);
  };

  useEffect(() => {
    input = inputRef.current;
    input.addEventListener("input", handleLineChange);
  }, []);

  return (
    <Input
      ref={inputRef}
      type="range"
      min="0.1"
      max="5.0"
      value={line}
      step="0.1"
      onChange={handleLineChange}
    />
  );
};

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LineController;

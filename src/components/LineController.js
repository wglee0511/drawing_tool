import React, { useRef } from "react";
import styled from "styled-components";

const LineController = (props) => {
  const { setLine, line } = props;

  let inputRef = useRef(null);
  const handleLineChange = (event) => {
    const size = event.target.value;
    setLine(() => Number(size));
  };

  return (
    <label style={{ marginBottom: "50px" }}>
      Line Width :
      <Input
        ref={inputRef}
        type="range"
        min="0.1"
        max="5.0"
        value={line}
        step="0.1"
        onChange={handleLineChange}
      />
    </label>
  );
};

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LineController;

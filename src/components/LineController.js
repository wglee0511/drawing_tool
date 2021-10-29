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
    <label style={{ marginBottom: "15px" }}>
      Line Width :
      <Input
        ref={inputRef}
        type="text"
        value={line}
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

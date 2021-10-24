import { useState } from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import Controller from "../components/Controller";

import "../styles/App.css";

function App() {
  const [line, setLine] = useState("2.5");
  const [color, setColor] = useState("#F6F9FC");

  console.log(line, color);
  return (
    <Wrapper className="App">
      <Canvas line={line} color={color} />
      <Controller setLine={setLine} setColor={setColor} line={line} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;

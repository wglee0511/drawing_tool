import { useState } from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import Controller from "../components/Controller";
import "../styles/App.css";
import theme from "../styles/theme";

function App() {
  const [line, setLine] = useState(2.5);
  const [color, setColor] = useState(theme.color.black);
  const [canvasSize, setCanvasSize] = useState([700, 700]);

  return (
    <Wrapper className="App">
      <Canvas line={line} color={color} canvasSize={canvasSize} />
      <Controller
        color={color}
        setLine={setLine}
        setColor={setColor}
        line={line}
        setCanvasSize={setCanvasSize}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;

import styled from "styled-components";
import Canvas from "../components/Canvas";
import Controller from "../components/Controller";

import "../styles/App.css";

function App() {
  return (
    <Wrapper className="App">
      <Canvas />
      <Controller />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;

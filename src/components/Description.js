import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const Description = () => {
  const lineContext = useContext(LineDataContext);
  const { lineType, radius, setRadius, currentRadi, setCurrentRadi } =
    lineContext;

  const messageMaker = (type) => {
    if (type === theme.type.line) {
      return "직선을 이을 두개의 선을 클릭하세요.";
    } else if (type === theme.type.normal) {
      return "드래그 하여 선을 그려주세요.";
    } else if (type === theme.type.arc) {
      return "반경을 입력하고 곡선의 시작점, 곡면의 방향점, 방향점과 이어지는 원의 접선방향 점을 클릭해 주세요.";
    } else if (type === theme.type.circle) {
      return "빈경을 입력하고 원의 중심을 클릭하세요.";
    } else if (type === theme.type.rect) {
      return "그래그 하여 사각형을 그려주세요.";
    } else if (type === theme.type.tri) {
      return "세개의 점을 클릭해 삼각형을 그려주세요.";
    } else {
      return "2이상의 숫자를 입력한 후 선택한 점 개수를 클릭하고 다각형을 그려주세요"
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const toInt = parseInt(radius);
    setCurrentRadi(toInt);
  };

  const handleOnChange = (event) => {
    const targetValue = event.target.value;
    setRadius(targetValue);
  };

  return (
    <Wrapper>
      {(lineType === theme.type.arc || lineType === theme.type.circle || lineType=== theme.type.poly) && (
        <>
          <form
            onSubmit={handleOnSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <input
              style={{ height: "30px" }}
              type="text"
              onChange={handleOnChange}
              value={radius}
            />
            <Btn isForm>입력</Btn>
          </form>
          <Btn>{lineType===theme.type.poly? "Selected node": "Current radius"} : {currentRadi}</Btn>
        </>
      )}

      <Btn>{messageMaker(lineType)}</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Btn = styled.button`
  display: flex;
  ${(props) =>
    props.isForm
      ? `  width: 100px;
  height: 50px;
  margin-left : 15px;
  `
      : `  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  `}
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default Description;

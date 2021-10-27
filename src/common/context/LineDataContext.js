import React, { createContext, useRef, useState } from "react";
import theme from "../../styles/theme";

const LineDataContext = createContext();

const LineDataProvider = (props) => {
  const canvasRef = useRef(null);
  const [imageArr, setImageArr] = useState([]);
  const [arrIndex, setIndex] = useState(-1);
  const [lineType, setLineType] = useState(theme.type.normal);
  const [pointsArr, setPoints] = useState([]);
  const [countPoint, setCountPoint] = useState(0);

  const handlePointClick = (event) => {
    if (lineType === theme.type.normal) {
      return;
    }
    const ctx = canvasRef.current.getContext("2d");
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    setCountPoint((prev) => (prev += 1));
    setPoints((prev) => {
      return [...prev, [x, y]];
    });
    if (lineType === theme.type.line) {
    }
  };

  const value = {
    imageArr,
    setImageArr,
    arrIndex,
    setIndex,
    canvasRef,
    lineType,
    setLineType,
    pointsArr,
    setPoints,
    countPoint,
    setCountPoint,
    handlePointClick,
  };
  return (
    <LineDataContext.Provider value={value}>
      {props.children}
    </LineDataContext.Provider>
  );
};

export { LineDataContext, LineDataProvider };

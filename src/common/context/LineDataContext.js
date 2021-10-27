import React, { createContext, useRef, useState } from "react";
import theme from "../../styles/theme";

const LineDataContext = createContext();

const LineDataProvider = (props) => {
  const canvasRef = useRef(null);
  const [imageArr, setImageArr] = useState([]);
  const [arrIndex, setIndex] = useState(-1);
  const [lineType, setLineType] = useState(theme.type.normal);

  const value = {
    imageArr,
    setImageArr,
    arrIndex,
    setIndex,
    canvasRef,
    lineType,
    setLineType,
  };
  return (
    <LineDataContext.Provider value={value}>
      {props.children}
    </LineDataContext.Provider>
  );
};

export { LineDataContext, LineDataProvider };

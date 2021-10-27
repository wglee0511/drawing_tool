import React, { createContext, useRef, useState } from "react";

const LineDataContext = createContext();

const LineDataProvider = (props) => {
  const canvasRef = useRef(null);
  const [imageArr, setImageArr] = useState([]);
  const [arrIndex, setIndex] = useState(-1);

  const value = {
    imageArr,
    setImageArr,
    arrIndex,
    setIndex,
    canvasRef,
  };
  return (
    <LineDataContext.Provider value={value}>
      {props.children}
    </LineDataContext.Provider>
  );
};

export { LineDataContext, LineDataProvider };

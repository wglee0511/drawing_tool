import React, { createContext, useRef, useState } from "react";
import theme from "../../styles/theme";

const LineDataContext = createContext();

const LineDataProvider = (props) => {
  const canvasRef = useRef(null);
  const [imageArr, setImageArr] = useState([]);
  const [arrIndex, setIndex] = useState(-1);
  const [lineType, setLineType] = useState(theme.type.normal);
  // radious는 strung 상태
  const [radius, setRadius] = useState(10);
  const [currentRadi, setCurrentRadi] = useState(10);
  const [pointsArr, setPoints] = useState([]);
  const [countPoint, setCountPoint] = useState(0);

  const handlePlusImageArr = () => {
    const imageData = canvasRef.current
      .getContext("2d")
      .getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
    const lastIndex = imageArr.length - 1;
    if (lastIndex !== arrIndex) {
      const newArr = imageArr.splice(0, arrIndex + 1);
      setImageArr(() => [...newArr, imageData]);
      setIndex((prev) => (prev += 1));
    } else {
      setImageArr((prev) => [...prev, imageData]);
      setIndex((prev) => (prev += 1));
    }
  };

  const handlePointClick = (event) => {
    if (lineType === theme.type.normal || lineType === theme.type.rect) {
      return;
    }
    const ctx = canvasRef.current.getContext("2d");
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    const nowCount = countPoint + 1;
    setCountPoint((prev) => (prev += 1));
    setPoints((prev) => {
      return [...prev, [x, y]];
    });
    if (lineType === theme.type.line) {
      if (nowCount === 2) {
        ctx.beginPath();
        ctx.moveTo(pointsArr[0][0], pointsArr[0][1]);
        ctx.lineTo(x, y);
        ctx.stroke();
        handlePlusImageArr();
        setCountPoint(0);
        setPoints([]);
      }
    } else if (lineType === theme.type.arc) {
      if (nowCount === 3) {
        ctx.beginPath();
        ctx.moveTo(pointsArr[0][0], pointsArr[0][1]);
        ctx.arcTo(pointsArr[1][0], pointsArr[1][1], x, y, currentRadi);
        ctx.stroke();
        handlePlusImageArr();
        setCountPoint(0);
        setPoints([]);
      }
    } else if (lineType === theme.type.circle) {
      ctx.beginPath();
      ctx.arc(x, y, currentRadi, 0, Math.PI * 2);
      ctx.stroke();
      handlePlusImageArr();
      setCountPoint(0);
      setPoints([]);
    } else if (lineType === theme.type.tri) {
      if (nowCount === 3) {
        ctx.beginPath();
        ctx.moveTo(pointsArr[0][0], pointsArr[0][1]);
        ctx.lineTo(pointsArr[1][0], pointsArr[1][1]);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
        handlePlusImageArr();
        setCountPoint(0);
        setPoints([]);
      }
    } else if (lineType === theme.type.poly) {
      if(currentRadi <= 2) {
        window.alert("2 이상의 숫자를 입력해주세요.")
        return
      } else if (nowCount === currentRadi) {
        ctx.beginPath()
        pointsArr.map((each, index) => {
         index === 0 ? ctx.moveTo(each[0], each[1]) : ctx.lineTo(each[0], each[1])
        })
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke()
        handlePlusImageArr();
        setCountPoint(0);
        setPoints([]);


      }
    }
  };

  console.log(countPoint)

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
    radius,
    setRadius,
    currentRadi,
    setCurrentRadi,
  };
  return (
    <LineDataContext.Provider value={value}>
      {props.children}
    </LineDataContext.Provider>
  );
};

export { LineDataContext, LineDataProvider };

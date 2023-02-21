import { useEffect, useState } from "react";

export default () => {
  const colorsArr = ["red", "black", "green", "gray", "blue"];
  const [color, setColor] = useState(0);
  const [radius, setRadius] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setColor((pre) => (pre + 1) % colorsArr.length);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  useEffect(() => {
    if (color == 4) setRadius(360);
  }, [color]);
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: colorsArr[color],
          borderRadius: radius,
        }}
      ></div>
    </div>
  );
};

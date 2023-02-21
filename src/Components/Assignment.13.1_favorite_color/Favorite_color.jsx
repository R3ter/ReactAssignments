import { useState, useEffect } from "react";

export default () => {
  const [color, setColor] = useState("red");
  useEffect(() => {
    const time = setTimeout(() => {
      setColor("blue");
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
};

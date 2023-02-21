import { useRef, useEffect, useState } from "react";

const Child = ({ width, height }) => {
  const div = useRef(null);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const t1 = setTimeout(() => {
      div.current.style.left = "50vw";
    }, 1000);
    const t2 = setTimeout(() => {
      setDisplay(false);
    }, 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
      }}
    >
      {display && (
        <div
          ref={div}
          style={{
            width,
            height,
            position: "absolute",
            left: 0,
            backgroundColor: "red",
            transitionDuration: "1s",
          }}
        ></div>
      )}
    </div>
  );
};
export default () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Child width={"100px"} height={"100px"} />
      <Child width={"100px"} height={"100px"} />
      <Child width={"100px"} height={"100px"} />
    </div>
  );
};

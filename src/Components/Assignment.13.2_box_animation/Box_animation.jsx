import { useRef, useEffect } from "react";

export default () => {
  const div = useRef(null);
  useEffect(() => {
    let timer1 = setTimeout(
      () => {
        div.current.style.left =
          10 +
          +div.current.style.left.substring(
            0,
            div.current.style.left.length - 2
          ) +
          "px";
      },
      1000,
      4
    );

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div>
      <div
        ref={div}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          position: "absolute",
          left: 0,
        }}
      ></div>
    </div>
  );
};


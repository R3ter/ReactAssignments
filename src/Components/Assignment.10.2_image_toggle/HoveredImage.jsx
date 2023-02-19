import { useRef } from "react";

export default ({ src }) => {
  const image = useRef(null);
  return (
    <img
      style={{ filter: "" }}
      ref={image}
      width={400}
      height={400}
      onMouseEnter={() => {
        image.current.style.filter = "grayscale(1)";
      }}
      onMouseLeave={() => {
        image.current.style.filter = "grayscale(0)";
      }}
      src={src}
    />
  );
};

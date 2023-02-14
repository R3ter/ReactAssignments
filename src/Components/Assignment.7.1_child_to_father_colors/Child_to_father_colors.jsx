import { useState } from "react";
import ButtonColor from "./ButtonColor";

export default () => {
  const colors = ["blue", "red", "yellow"];
  const [currentColor, setCurrentColor] = useState();
  return (
    <div>
      {colors.map((e) => (
        <ButtonColor
          onclick_={(x) => {
            setCurrentColor(x);
          }}
          color_={e}
        ></ButtonColor>
      ))}
      <p>Current Color in Parent is : {currentColor}</p>
    </div>
  );
};

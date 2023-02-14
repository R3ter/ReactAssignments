import { useState } from "react";

export default () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <p
        style={{
          backgroundColor: number == 0 ? "black" : number > 0 ? "green" : "red",
        }}
      >
        {number}
      </p>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

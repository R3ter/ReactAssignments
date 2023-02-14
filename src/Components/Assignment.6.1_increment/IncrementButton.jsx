import { useState } from "react";

export default () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
};

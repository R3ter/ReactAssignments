import { useState } from "react";

export default () => {
  const [hidden, setHidden] = useState({ state: true, text: "hide" });
  return (
    <div>
      <button
        onClick={() => {
          setHidden({
            state: !hidden.state,
            text: hidden.state ? "show" : "hide",
          });
        }}
      >
        {hidden.text}
      </button>
      {hidden.state && (
        <div
          style={{ width: "200px", height: "200px", backgroundColor: "red" }}
        ></div>
      )}
    </div>
  );
};

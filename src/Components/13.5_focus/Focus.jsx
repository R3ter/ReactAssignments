import { useEffect, useRef } from "react";

export default () => {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div>
      <input ref={input} type={"email"} />
      <input type={"submit"} />
    </div>
  );
};

import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div>
      <div>header</div>
      <Outlet />
    </div>
  );
};

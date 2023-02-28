import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/productPage",
        element: <ProductPage />,
      },
    ],
  },
]);
export default () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

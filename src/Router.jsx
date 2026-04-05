import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./Sharedlayout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/Index";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;

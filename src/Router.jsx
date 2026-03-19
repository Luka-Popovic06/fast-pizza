import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./Sharedlayout";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
]);
export default router;

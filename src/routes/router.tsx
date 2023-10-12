/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "@pages/ErrorPage";
import LoginPage from "@/pages/LoginPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <LoginPage />,
        index: true,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
    children: [],
  },
]);

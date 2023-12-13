import logo from "./logo.svg";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./views/landing.tsx";
import Home from "./views/home";
import Menu from "./views/menu";
import Bean from "./views/bean";
import Brew from "./views/brew";

/// This is an app for coffee lovers

/// View:  landing page, home page, menu page, bean page, brew page
/// Component: menu, bean, brew, catergory, content

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/bean",
    element: <Bean />,
  },
  {
    path: "/brew",
    element: <Brew />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

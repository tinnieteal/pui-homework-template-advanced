import logo from "./logo.svg";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./views/landing.tsx";
import Home from "./views/home";
import Menu from "./views/menu";


/// This is an app for coffee lovers

/// View:  landing page, home page, menu page, bean page, brew page
/// Component: menu, bean, brew, catergory, content

const router = createBrowserRouter([
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
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

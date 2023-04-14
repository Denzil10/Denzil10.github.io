import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Home from "./pages/Home";
import Forum from "./pages/Forum"
import React, { useEffect, useState } from 'react';




function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Inbox",
      element: <Inbox />,
    },
    {
      path: "/Forum",
      element: <Forum />,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
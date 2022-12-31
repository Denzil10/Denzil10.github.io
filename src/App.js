import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Home from "./pages/Home";
import React, { useEffect, useState } from 'react';




function App() {

  const router = createBrowserRouter([
    {
      path: "/Inbox",
      element: <Inbox />,
    },
    {
      path: "/",
      element: <Home />,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
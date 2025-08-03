import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Homepage"
import {Error, AllBlogs} from "./Container"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/blogs",
      element: <AllBlogs />,
    },
    {
      path: "*",
      element: <Error />,
    }
  ])

  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
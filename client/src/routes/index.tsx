import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layouts/web";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Plants from "../pages/plants";
import Index from "../pages/404";
import Details from "../layouts/details";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/plants",
        element: <Plants />,
      }, 
       {
        path: "/plants/:id",  
        element: <Details />,
      },
      {
        path: "/home/:id",   
        element: <Details />,
      },
    ],
  },
  {
    path: "*",
    element: <Index />,
  },
]);

export default routes;

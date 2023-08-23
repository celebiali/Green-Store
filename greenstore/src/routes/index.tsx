import {createBrowserRouter} from "react-router-dom";
import WebLayout from "../layouts/web";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Plants from "../pages/plants";
import Page404 from "../../src/pages/Page404";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <WebLayout/>,
        children: [
            {
                index:true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/plants',
                element: <Plants/>
            },

        ]
    },{
        path: '*',
        element: <Page404/>
    }
])

export default routes

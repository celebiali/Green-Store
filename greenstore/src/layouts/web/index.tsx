import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

function WebLayout() {
    return (
        <>
            <Navbar/>
                <Outlet />
            <Footer/>
        </>
    );
}

export default WebLayout;
import React from 'react';
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

function WebLayout() {
    return (
        <>
            <Navbar/>
            <main className="p-6 ml-[250px]">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}

export default WebLayout;
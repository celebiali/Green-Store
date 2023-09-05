// WebLayout.js
import  { useState } from 'react';
import InternetKontrol from '../../pages/internetcheck/InternetKontrol.tsx';
import Navbar from '../navbar';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';

function WebLayout() {
    const [isInternetConnected, setInternetConnected] = useState(true);
    return (
        <div>
            <InternetKontrol setInternetConnected={setInternetConnected} />
            {isInternetConnected ? (
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            ) : (
                <p>İnternet bağlantısı kesildi.</p>
            )}
        </div>
    );
}

export default WebLayout;

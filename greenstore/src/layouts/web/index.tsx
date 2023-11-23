// WebLayout.js
import { useState } from "react";
import InternetConnectionStatus from "../internet/InternetConnectionStatus.tsx";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import OfflineMessage from "../../components/OfflineMessage.tsx";
import { useModals } from "../../stores/Modal/hooks";

function WebLayout() {
  const [isInternetConnected, setInternetConnected] = useState(true);
  const modals = useModals();

  console.log(modals, "modals");

  return (
    <div>
      <InternetConnectionStatus setInternetConnected={setInternetConnected} />
      {isInternetConnected ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <OfflineMessage />
      )}
    </div>
  );
}

export default WebLayout;

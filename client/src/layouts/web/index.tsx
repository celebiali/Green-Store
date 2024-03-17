// WebLayout.js
import { useState } from "react";
import InternetConnectionStatus from "../internet/InternetConnectionStatus.tsx";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import OfflineMessage from "../../components/OfflineMessage.tsx";
import { useModals } from "../../stores/Modal/hooks";
import Modals from "../../components/modals/auth/modals";

function WebLayout() {
  const [isInternetConnected, setInternetConnected] = useState(true);
  const modals = useModals();


  return (
    <div>
      <InternetConnectionStatus setInternetConnected={setInternetConnected} />
      {isInternetConnected ? (
        <>
          {modals.length > 0 && <Modals />}
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

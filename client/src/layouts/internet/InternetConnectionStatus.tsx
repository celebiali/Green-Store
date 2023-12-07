import  {  useEffect } from 'react';

type InternetModal = {
    setInternetConnected: (value: boolean) => void;
};

function InternetConnectionStatus({ setInternetConnected }:InternetModal) {

    useEffect(() => {
        function checkInternetConnection() {
            fetch('https://www.google.com', { mode: 'no-cors' })
                .then(() => {
                    setInternetConnected(true);
                })
                .catch(() => {
                    setInternetConnected(false);
                });
        }

        checkInternetConnection();
        const internetCheckInterval = setInterval(checkInternetConnection, 4000);

        return () => {
            clearInterval(internetCheckInterval);
        };
    }, [setInternetConnected]);

    return (
        <>
        </>
    );
}

export default InternetConnectionStatus;

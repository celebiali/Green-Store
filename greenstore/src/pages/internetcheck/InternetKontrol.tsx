// InternetKontrol.js

import  {  useEffect } from 'react';

function InternetKontrol({ setInternetConnected }) {
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
        const internetCheckInterval = setInterval(checkInternetConnection, 5000);

        return () => {
            clearInterval(internetCheckInterval);
        };
    }, [setInternetConnected]);

    return (
        <div>
            {/* Bu bileşen artık isInternetConnected değerini kullanmıyor */}
        </div>
    );
}

export default InternetKontrol;

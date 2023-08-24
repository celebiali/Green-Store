import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

function Home() {
    const {t} = useTranslation()

    return (
        <div>
            <Helmet>
                <title> {t('navbar.home')}</title>
            </Helmet>
            <div>{t('navbar.home')}</div>
        </div>
    );
}
export default Home;
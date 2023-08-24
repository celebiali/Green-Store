import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

function About() {
    const {t} = useTranslation()

    return (
        <div>
            <Helmet>
                <title> {t('navbar.about')}</title>
            </Helmet>
            <div>{t('navbar.about')}</div>
        </div>
    );
}
export default About;
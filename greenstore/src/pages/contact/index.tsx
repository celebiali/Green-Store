import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";


function Contact() {
    const {t} = useTranslation()

    return (
        <div>
        <Helmet>
            <title> {t('navbar.contact')}</title>
        </Helmet>
            <div>{t('navbar.contact')}</div>
    </div>
    )
}
export default Contact;
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import Product from "../../components/product/Product.tsx";

function Home() {
    const {t} = useTranslation()

    return (
        <div className="home">
            <Helmet>
                <title> {t('navbar.home')}</title>
            </Helmet>
            <div>{t('navbar.home')}</div>
        <div className="product-card">
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
        </div>
        </div>
    );
}
export default Home;
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
               <div className="shop">
                <h3>New Plants</h3>
                <button>Shop Now</button>
                </div>
        <div className="product-card">
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
            <Product title="Title" price="$123" brand="Brand" star="xxxx"/>
        </div>
            <div>
                    <title>Our story</title>
                    <p>For People Who Love Plants</p>
                    <p>Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.
                        Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.</p>
            <button>Read More</button>
            </div>
            <div>
            <h3>What Our Customers Say</h3><hr/>
                
            </div>
        </div>
    );
}
export default Home;
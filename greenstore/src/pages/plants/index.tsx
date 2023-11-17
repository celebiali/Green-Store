import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Product from "../../components/product/Product";

function Plants() {
  const { t } = useTranslation();
  return (
    <div className="plants_container">
      <Helmet>
        <title>
          {t("navbar.green-store")} - {t("navbar.plants")}
        </title>
      </Helmet>
      <div className="plants_products">
        <div className="plants">
          <div className="breadcrump">Home / Plants</div>
          <div className="product_filter">
            <div className="product_filter_text">Showing 1–9 of 25 results</div>
            <div className="product_filter_select">Default sorting ^</div>
          </div>
          <div className="product_container">
            <div className="product_card">
              <Product title="Title" price="$123" brand="Brand" star="xxxx" />
              <Product title="Title" price="$123" brand="Brand" star="xxxx" />
              <Product title="Title" price="$123" brand="Brand" star="xxxx" />
              <Product title="Title" price="$123" brand="Brand" star="xxxx" />
              <Product title="Title" price="$123" brand="Brand" star="xxxx" />
              <Product title="Title" price="$123" brand="Brand" star="xxxx" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Plants;

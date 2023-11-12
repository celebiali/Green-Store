import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Product from "../../components/product/Product.tsx";
import Information from "../../components/information/Information.tsx";
import Comments from "../../components/comments/Comments.tsx";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Helmet>
        <title>
          {t("navbar.green-store")} - {t("navbar.home")}
        </title>
      </Helmet>
      <div className="shop">
        <h3>New Plants</h3>
        <button>Shop Now</button>
      </div>
      <div className="product-card">
        <Product title="Title" price="$123" brand="Brand" star="xxxx" />
        <Product title="Title" price="$123" brand="Brand" star="xxxx" />
        <Product title="Title" price="$123" brand="Brand" star="xxxx" />
        <Product title="Title" price="$123" brand="Brand" star="xxxx" />
        <Product title="Title" price="$123" brand="Brand" star="xxxx" />
        <Product title="Title" price="$123" brand="Brand" star="xxxx" />
      </div>
      <div>
        <title>Our story</title>
        <p>For People Who Love Plants</p>
        <p>
          Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc
          at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed
          in placerat. Facilisis eu faucibus diam cursus pulvinar consectetur
          purus sem felis, mauris consectetur nisl vitae gravida ultricies sem
          condimentum aliquet ut sed gravida amet vitae euismod pulvinar
          volutpat laoreet pharetra.
        </p>
        <button>Read More</button>
      </div>
      <div>
        <h3>What Our Customers Say</h3>
        <hr />
        <Comments
          title="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."
          username="JENNIFER LEWIS"
          imageUrl={""}
        />
        <Comments
          title="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."
          username="ALICIA HEART"
          imageUrl={""}
        />
        <Comments
          title="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."
          username="JUAN CARLOS"
          imageUrl={""}
        />
      </div>
      <div className="information">
        <Information
          iconType="fa"
          title="SECURE PAYMENT"
          info="Curabitur interdum, nisl at tincidunt."
        />
        <svg width="1" height="60">
          <line x1="0" y1="0" x2="0" y2="100" stroke="#000" stroke-width="1" />
        </svg>
        <Information
          iconType="ai"
          title="DELIVERED WITH CARE"
          info="Donec sit amet neque id nisl."
        />
        <svg width="1" height="60">
          <line x1="0" y1="0" x2="0" y2="100" stroke="#000" stroke-width="1" />
        </svg>
        <Information
          iconType="cg"
          title="EXCELLENT SERVICE"
          info="Amet neque id nisl ullamcorper."
        />
      </div>
    </div>
  );
}
export default Home;

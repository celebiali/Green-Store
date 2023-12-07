import { AiOutlineStar } from "react-icons/ai";
import ProductDto from "../../models/components/ProductDto.ts";

function Product({ title, brand, price }: ProductDto) {
  return (
    <section className="product-section">
      <div className="img">
        <img src="../../../public/images/product.jpeg" alt="img" />
      </div>
      <div className="product">
        <div className="star">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="title">{title}</div>
        <div className="brand">{brand}</div>
        <div className="price">{price}</div>
      </div>
    </section>
  );
}

export default Product;

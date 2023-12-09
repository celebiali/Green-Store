import { AiOutlineStar } from "react-icons/ai";
import ProductDto from "../../models/components/ProductDto.ts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../stores/Products";

function Product({ title, brand, price }: ProductDto) {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products, loading, "products");

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

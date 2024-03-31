//import { AiOutlineStar } from "react-icons/ai";
import ProductDto from "../../models/components/ProductDto.ts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../stores/Products";
import { useNavigate } from "react-router-dom";

function Product({ description, name, category, price }: ProductDto) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {products.map((product) => (
        <section
          onClick={() => history(`/plants/${product._id}`)}
          className="product-section"
          key={product._id}
        >
          <div className="img">
            <img src="../../../public/images/product.jpeg" alt="img" />
          </div>
          <div className="product">
            <div className="title">{product.category}</div>
            <div className="brand">{product.name}</div>
            <div className="price">{product.description}</div>
            <div className="price">{product.price}</div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Product;

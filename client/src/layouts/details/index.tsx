import { getProductDetail } from "../../stores/Products";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../components/button/Button";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  console.log(product, loading, "çal");
  return (
    <div className="details_container">
      <div className="details_products_container">
        <div className="details_products">
          <div className="img">
            <img src="../../../public/images/product.jpeg" alt="img" />
          </div>
          <div className="product_information">
            <div className="product_title">Bird of Paradise</div>
            <div className="product_price">$249.00</div>
            <div className="product_description">
              Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
              molestie purus tristique sed tempor consequat risus tellus amet
              augue egestas mauris scelerisque donec ultrices. Sollicitudin
              facilisis massa pellentesque in ultrices enim nunc ac egestas
              elementum ut in ornare sit malesuada.
            </div>
            <div className="product_addCart">
              <input /> <Button title="Add To Cart"></Button>
            </div>
            <div className="product_category">
              <span>Categories:</span>
              <a href="#">Ceramic pots,</a>
              <a href="#">Large Plants,</a>
              <a href="#">Plant bundle,</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

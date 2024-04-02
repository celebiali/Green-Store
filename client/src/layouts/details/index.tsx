import { getProductDetail } from "../../stores/Products";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Product from "../../components/product/Product.tsx";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.products);
  const [tab, setTab] = useState(0);
  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

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
        <div className="details_description_reviews">
          <span
            className={tab === 0 ? "active reviews" : "reviews"}
            onClick={() => setTab(0)}
          >
            Description
          </span>
          <span
            className={tab === 1 ? "active reviews" : "reviews"}
            onClick={() => setTab(1)}
            style={{ marginLeft: "20px" }}
          >
            Reviews (0)
          </span>
        </div>
        <div className="detail_description_navbar">
          {tab === 0 && (
            <div>
              <div className="title">Maecenas efficitur ornare massa.</div>
              <div className="subtitle">
                Duis auctor nisl vitae purus interdum, quis congue lacus rutrum.
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac massa eget urna tempor vehicula vel id nisi.
                Pellentesque sed felis auctor, molestie lectus vitae, elementum
                orci. In et nunc consequat, semper tellus eget, euismod quam.
              </div>
            </div>
          )}
          {tab === 1 && (
            <div>
              <div className="comments">There are no reviews yet.</div>
              <div className="add_comment">
                <div className="add_comment_content">
                  <div className="add_comment_header">
                    Be the first to review "Bird of Paradise"
                  </div>
                  <div className="add_comment_message">
                    Your email address will not be published. Required fields
                    are marked
                  </div>
                  <div>
                    <div className="title">Your review *</div>
                    <textarea className="textarea"></textarea>
                  </div>
                  <div>
                    <div className="user">
                      <div className="user_name">
                        <div>Name</div>
                        <input />
                      </div>
                      <div className="user_email">
                        <div>Email</div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div className="confirm">
                    <input type="checkbox" />
                    <span>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </div>
                  <Button title="Submit"></Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div class="related_products">
          <div className="title">Related Products</div>
          <div></div>
        </div>
        <div className="related_product_detail">
          <Product />
        </div>
      </div>
    </div>
  );
}

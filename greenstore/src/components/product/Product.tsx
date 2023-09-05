import { AiOutlineStar } from "react-icons/ai"
import ProductDto from "../../models/components/ProductDto.ts";

function Product({star,title,brand,price}:ProductDto) {
    return (
        <section className="product-section">
            <div className="img">
            <article >
                <img alt="product"></img>
            </article>
            </div>
            <div className="product">
            <article className="star">
                <AiOutlineStar/>
                {star}
            </article>
                <article className="title">
                {title}
            </article>
                <article className="brand">
                 {brand}
            </article>
                <article className="price">
                {price}
            </article>
            </div>
        </section>
    );
}

export default Product;
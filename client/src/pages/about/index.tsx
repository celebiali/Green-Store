import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft } from "react-icons/fa";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about_container">
      <Helmet>
        <title>
          {t("navbar.green-store")} - {t("navbar.about")}
        </title>
      </Helmet>
      <div className="about_title_container">
        <div className="about_title">
          <h1>About</h1>
        </div>
        <div className="about_title_content">
          <div className="about_title_line"></div>
          <div className="about_title_description">
            <h3>We provide fresh and healthy plants for your space</h3>
            <p>
              Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit
              mauris semper platea urna, sapien fermentum venenatis etiam enim
              ullamcorper phasellus tortor justo sapien faucibus in adipiscing
              risus adipiscing bibendum nec eget tincidunt sed.
            </p>
          </div>
        </div>
      </div>
      <div className="video_container">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/XHOmBV4js_E"
        ></iframe>
      </div>
      <div className="our-story_container">
        <div className="our-story_title_container">
          <div className="our-story_title">
            <h5>OUR STORY</h5>
          </div>
          <div className="our-story_content">
            <div className="our-story_content_description">
              <p>
                Tristique dapibus porta viverra sit accumsan integer semper
                dolor etiam id iaculis feugiat egestas urna est magna euismod
                donec facilisis sed integer orci ac.
              </p>
              <p>
                Mi et tincidunt ut pellentesque arcu molestie dolor, nunc
                feugiat sit mauris semper platea urna, sapien fermentum
                venenatis etiam enim ullamcorper phasellus tortor justo, et,
                pellentesque pellentesque sapien faucibus in adipiscing risus
                adipiscing bibendum in nec eget tincidunt in in sed magna arcu
                molestie nec mauris quisque.
              </p>
              <p>
                Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae
                in volutpat faucibus elementum, sodales orci mi fames molestie
                venenatis nunc hendrerit.
              </p>
              <span>
                <FaQuoteLeft />
              </span>

              <h3>
                Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
                tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in
                nec ullamcorper vel.
              </h3>
            </div>
            <div className="user_content">
              <div className="user_image">
                <img
                  src="/images/plants-store-owner-avatar-img.jpg"
                  alt="User"
                />
              </div>
              <div className="user">
                <p className="fullName">EMILY EVERGREEN</p>
                <p className="title">Founder, Owner</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="image_container">
        <div className="image">
          <img
            width="380"
            height="400"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6.jpg"
            alt=""
            decoding="async"
            srcSet="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6.jpg 400w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6-300x300.jpg 300w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6-150x150.jpg 150w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6-100x100.jpg 100w"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
        <div className="image">
          <img
            loading="lazy"
            width="380"
            height="400"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1.jpg"
            alt=""
            decoding="async"
            srcSet="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1.jpg 400w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1-300x300.jpg 300w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1-150x150.jpg 150w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1-100x100.jpg 100w"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
        <div className="image">
          <img
            loading="lazy"
            width="380"
            height="400"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2.jpg"
            alt=""
            decoding="async"
            srcSet="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2.jpg 400w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2-300x300.jpg 300w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2-150x150.jpg 150w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2-100x100.jpg 100w"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
      </div>
      <div className="image_container">
        <div className="image">
          <img
            width="380"
            height="400"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3.jpg"
            className="attachment-full size-full"
            alt=""
            decoding="async"
            loading="lazy"
            srcSet="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3.jpg 400w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3-300x300.jpg 300w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3-150x150.jpg 150w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3-100x100.jpg 100w"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
        <div className="image">
          <img
            width="380"
            height="400"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4.jpg"
            className="attachment-full size-full"
            alt=""
            decoding="async"
            loading="lazy"
            srcSet="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4.jpg 400w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4-300x300.jpg 300w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4-150x150.jpg 150w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4-100x100.jpg 100w"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
        <div className="image">
          <img
            width="380"
            height="400"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5.jpg"
            className="attachment-full size-full"
            alt=""
            decoding="async"
            loading="lazy"
            srcSet="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5.jpg 400w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5-300x300.jpg 300w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5-150x150.jpg 150w, https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5-100x100.jpg 100w"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
      </div>
    </div>
  );
}
export default About;

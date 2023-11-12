import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title> {t("navbar.contact")}</title>
      </Helmet>
      <div className="contact">
        <div className="left-contact">
          <div>
            <h1>Get In Touch</h1>
            <p>
              Sit vulputate faucibus eget eget scelerisque faucibus malesuada
              nullam mollis ut montes, dui scelerisque ornare.
            </p>
          </div>
          <div>
            <div>
              <h4>
                <FaMapMarkerAlt className="custom-marker" /> <span className="icon-title">VISIT US</span>
              </h4>
              <label>123 Demo St, San Francisco, CA 45678, United States</label>
            </div>
            <div>
              <h4>İcon + CALL US</h4>
              <label>+1 123-456-7890</label>
            </div>
            <div>
              <h4>İcon + EMAIL US</h4>
              <label>mail@example.com</label>
            </div>
          </div>
          <hr />
          <div className="follow-us">
            <h5>FOLLOW US</h5>
            <div className="social-links">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        </div>
        <div>
          <hr className="hr" />
        </div>
        <div className="right-contact">
          <div>
            <h3> Drop us a line or two</h3>
          </div>
          <div>
            <label>Name*</label>
            <input placeholder="Full Name" />
          </div>
          <div>
            <label>Email* </label>
            <input placeholder="Email Address" />
          </div>
          <div>
            <label>Comment or Message* </label>
            <input placeholder="Your message" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

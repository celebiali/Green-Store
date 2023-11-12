import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { AiFillPhone, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsPinterest } from "react-icons/bs";
function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>
          {t("navbar.green-store")} - {t("navbar.contact")}
        </title>
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
            <div className="custom-container">
              <h4>
                <FaMapMarkerAlt className="custom-marker" />
                <span className="icon-title">VISIT US</span>
              </h4>
              <span className="custom-content">
                123 Demo St, San Francisco, CA 45678, United States
              </span>
            </div>
            <div className="custom-container">
              <h4>
                <AiFillPhone className="custom-marker" />
                <span className="icon-title">CALL US</span>
              </h4>
              <span className="custom-content">+1 123-456-7890</span>
            </div>
            <div className="custom-container">
              <h4>
                <MdEmail className="custom-marker" />
                <span className="icon-title">EMAIL US</span>
              </h4>
              <span className="custom-content">mail@example.com</span>
            </div>
          </div>
          <hr />
          <div className="follow-us">
            <h5>FOLLOW US</h5>
            <div className="social-links">
              <AiOutlineInstagram />
              <BsPinterest />
              <BsFacebook />
              <AiFillYoutube />
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
          <div className="input-container">
            <label>Name*</label>
            <input placeholder="Full Name" />
          </div>
          <div className="input-container">
            <label>Email* </label>
            <input placeholder="Email Address" />
          </div>
          <div className="input-container">
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

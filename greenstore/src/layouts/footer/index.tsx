import NavbarMenu from "../navbar/menu";
import { NAVBAR_MENU } from "../../utils/consts/navbar.ts";
import { useNavbarType } from "../../stores/App/hooks.ts";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import Button from "../../components/button/Button";

function Footer() {
  const type = useNavbarType();

  return (
    <>
      <div className="footer">
        <div className="footer-menu">
          {type === "app" && <NavbarMenu menu={NAVBAR_MENU} />}
        </div>
        <div className="section">
          <h4>Subscribe to our newsletter</h4>
          <span>
            <input placeholder="Your email address.." />
            <Button title="Subscribe" ></Button>
          </span>
        </div>
        <div className="icons">
          <span>
            <AiOutlineInstagram />
          </span>
          <span>
            <CiFacebook />
          </span>
          <span>
            <TfiTwitter />
          </span>
        </div>
        <div className="footer_end">
          <span>
            <p>© 2023 Plant Shop. Powered by Plant Shop.</p>
          </span>
        </div>
      </div>
    </>
  );
}
export default Footer;

import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { useNavbarType } from "../../stores/App/hooks.ts";
import NavbarMenu from "./menu";
import { NAVBAR_MENU } from "../../utils/consts/navbar.ts";
import { Menu } from "@headlessui/react";
import { languages } from "../../utils/consts/appearance.tsx";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../components/LanguageSelect.tsx";
import { createModal } from "../../stores/Modals/actions";

function Navbar() {
  const type = useNavbarType();
  const { i18n } = useTranslation();


  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Greenstore</Link>
        </div>
        <div className="menu">
          <div>{type === "app" && <NavbarMenu menu={NAVBAR_MENU} />}</div>
          <div className="icons">
            <Link to="/">
              <SlBag />
    <div className="cart-count">0</div>
            </Link>
            <Link to="/">
              <span
                onClick={() => {
                  createModal("register");
                }}
              >
                <SlUser />
              </span>
            </Link>
            <Link to="/">
              <Menu as="nav">
                <Menu.Button as="div">
                  <LanguageSelect languages={languages} i18n={i18n} />
                </Menu.Button>
              </Menu>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;

import NavbarMenu from "../navbar/menu";
import {NAVBAR_MENU} from "../../utils/consts/navbar.ts";
import {useNavbarType} from "../../stores/App/hooks.ts";
import {AiOutlineInstagram} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {TfiTwitter} from "react-icons/tfi";

function Footer() {
    const type = useNavbarType()

    return (
        <>
         <div className="footer">
             <div className="footer-menu">
                 {type === "app" && <NavbarMenu menu={NAVBAR_MENU}/>}
             </div>
                 <div className="section">
                     <h4>Subscribe to our newsletter</h4>
                     <input placeholder="Your email address.."/>
                     <button>Subscribe</button>
                 </div>
        <div className="icons">
            <AiOutlineInstagram/>
            <CiFacebook/>
            <TfiTwitter/>
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
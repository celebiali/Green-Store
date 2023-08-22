import {Link} from "react-router-dom";
import {GrLanguage} from "react-icons/gr";
import {SlBag} from "react-icons/sl";
import {SlUser} from "react-icons/sl";
import {useNavbarType} from "../../stores/App/hooks.ts";
import NavbarMenu from "./menu";
import {NAVBAR_MENU} from "../../utils/consts/navbar.ts";
function Navbar() {
    const type = useNavbarType()
    return (
        <header className="header">
            <div className="container">
                <div>
                    <Link to="/">Green Store</Link>
                </div>
                <div className="icons">
                    <div>
                        {type === "app" && <NavbarMenu menu={NAVBAR_MENU}/>}
                    </div>
                    <div>
                        <Link to="/">
                            <SlBag/>
                        </Link>
                        <Link to="/">
                            <GrLanguage/>
                        </Link>
                        <Link to="/">
                            <SlUser/>
                        </Link>
                    </div>
             </div>
           </div>
      </header>
    );
}
export default Navbar;
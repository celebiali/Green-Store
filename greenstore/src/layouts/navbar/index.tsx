import {Link} from "react-router-dom";
import {SlBag} from "react-icons/sl";
import {SlUser} from "react-icons/sl";
import {useNavbarType} from "../../stores/App/hooks.ts";
import NavbarMenu from "./menu";
import {NAVBAR_MENU} from "../../utils/consts/navbar.ts";
import { Menu } from '@headlessui/react'
import {getLanguageName, languages } from "../../utils/consts/appearance.tsx"
import { useTranslation } from 'react-i18next'
function Navbar() {
    const type = useNavbarType()
    const {  i18n } = useTranslation()

    return (
        <header className="header">
            <div className="container">
                <div>
                    <Link to="/">Green Store</Link>
                </div>
                <div className="menu">
                    <div>
                        {type === "app" && <NavbarMenu menu={NAVBAR_MENU}/>}
                    </div>
                    <div className="icons">
                        <Link to="/">
                            <SlBag/>
                        </Link>
                        <Link to="/">
                            <Menu as="nav" >
                                <Menu.Button>
                                    <img
                                        src={`/icons/${i18n.language}.svg`}
                                        alt={getLanguageName(i18n.language)}
                                    />
                                    {i18n.language.toUpperCase()}
                                </Menu.Button>
                                <Menu.Items as="div">
                                    {languages.map(({ key, value }, index) => (
                                        <Menu.Item key={index}>
                                            {() => (
                                                <button
                                                    onClick={() => {
                                                        i18n.changeLanguage(key)
                                                    }}
                                                >

                                                    {value}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Menu>
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
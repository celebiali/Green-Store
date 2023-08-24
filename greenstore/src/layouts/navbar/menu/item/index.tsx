import { NavLink } from "react-router-dom"
import {useTranslation} from "react-i18next";
import i18n from "i18next";

export default function MenuItem({ item }:any) {
    const {t} = useTranslation()
    return (
        <NavLink
            to={item.path}
        >
            {t(item.title[i18n.language]) || item.title.en}
        </NavLink>
    )
}
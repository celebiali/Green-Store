import { NavLink } from "react-router-dom"
import {useTranslation} from "react-i18next";

export default function MenuItem({ item }:any) {
    const {t} = useTranslation()

    return (
        <NavLink
            to={item.path}
        >
            {t(item.title)}
        </NavLink>
    )
}
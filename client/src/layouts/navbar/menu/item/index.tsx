import { NavLink } from "react-router-dom"
import {useTranslation} from "react-i18next";
import i18n from "i18next";
interface MenuItemProps {
    item: {
        path: string;
        title: {
            [key: string]: string;
        };
    };
}

export default function MenuItem({ item }: MenuItemProps) {
    const { t } = useTranslation();
    return (
        <NavLink to={item.path}>
            {t(item.title[i18n.language]) || item.title.en}
        </NavLink>
    );
}
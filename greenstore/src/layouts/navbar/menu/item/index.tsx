import { NavLink } from "react-router-dom"
export default function MenuItem({ item }:any) {
    return (
        <NavLink
            to={item.path}
        >
            {item.title}
        </NavLink>
    )
}
import MenuItem from "./item"

export default function NavbarMenu({ menu }:any) {
    return (
        <nav >
            {menu.map((menuItem:any, key:any) =>
                <MenuItem item={menuItem} key={key} />)}
        </nav>
    )
}


import MenuItem from "./item"

export default function NavbarMenu({ menu }:any) {
    return (
        <nav >
            {menu.map((item:any, key:any) => <MenuItem item={item} key={key} />)}
        </nav>
    )
}

import MenuItem from "./item";

interface MenuItem { 
  label: string;
  url: string;
}

interface NavbarMenuProps {
  menu: MenuItem[];
}

export default function NavbarMenu({ menu }: NavbarMenuProps) {
  return (
    <nav>
      {menu.map((menuItem, key) => (
        <MenuItem item={menuItem} key={key} />
      ))}
    </nav>
  );
}

import { linksData } from "@/data/links.data";
import MenuLinksRender from "./MenuLinksRender";

interface SideMenuProps {
    isOpen:boolean
}

export default function SideMenu({isOpen}: SideMenuProps) {
  return (
    <aside 
    className={`md:hidden side-menu h-100vh ${isOpen &&"clip-path-full"}`}
    >
      <MenuLinksRender links={linksData}/>
    </aside>
  );
}


import { linksData } from "@/data/links.data";
import MenuLinksRender from "./MenuLinksRender";

interface SideMenuProps {
    isOpen:boolean
}

export default function SideMenu({isOpen}: SideMenuProps) {
  return (
    <aside 
    className={`md:hidden clip-path-0 w-[60%] bg-white fixed z-50 top-nav right-0 h-100vh transition-[clip-path] duration-700 ease-in-out ${isOpen &&"clip-path-full"}`}
    >
      <MenuLinksRender links={linksData}/>
    </aside>
  );
}


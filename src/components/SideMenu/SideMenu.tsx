import { linksData } from "@/data/links.data";
import MenuLinksRender from "./MenuLinksRender";

interface SideMenuProps {
  isOpen: boolean
}

export default function SideMenu({ isOpen }: SideMenuProps) {
  return (
    <div>
      <div
        className={`md:hidden clip-path-0 w-[60%] bg-white fixed z-50 top-nav right-0 h-100vh transition-[clip-path] duration-700 ease-in-out ${isOpen && "clip-path-full"}`}
      >
        <MenuLinksRender links={linksData} />
      </div>
      <div className={`fixed z-30 h-screen w-full top-0 left-0 transition-all duration-500 ease-in-out md:hidden ${isOpen?"bg-black/50 backdrop-blur-sm":"backdrop-blur-0 -z-50"}`}></div>
    </div>
  );
}


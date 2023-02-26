import useOutsideClick from "@/customHooks/useOutsideClick";
import { linksData } from "@/data/links.data";
import MenuLinksRender from "./MenuLinksRender";

interface SideMenuProps {
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
}

export default function SideMenu({ isOpen, onOpen }: SideMenuProps) {
  const divRef = useOutsideClick<HTMLDivElement>(() => {
    onOpen(false)
  }, isOpen)

  return (
    <div>
      <div
        ref={divRef}
        className={`md:hidden clip-path-0 w-[60%] bg-primary shadow- shadow-black fixed z-50 top-nav right-0 h-100vh transition-[clip-path] duration-700 ease-in-out ${isOpen && "clip-path-full"}`}
      >
        <MenuLinksRender links={linksData} />
      </div>
      <div className={`fixed h-screen w-full top-0 left-0 transition-all duration-500 ease-in-out md:hidden ${isOpen ? "bg-black/50 backdrop-blur-sm z-30" : "backdrop-blur-0 -z-50"}`}></div>
    </div>
  );
}


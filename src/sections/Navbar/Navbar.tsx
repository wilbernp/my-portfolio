import { useState } from "react";
import { linksData } from "@/data/links.data";
import ButtonMenu from "./ButtonMenu";
import NavLinksRender from "./NavLinksRender";
import { SideMenu } from "@/components/SideMenu";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <nav>
            <div className="flex justify-between items-center w-full left-0 top-0 h-nav fixed z-50 bg-[#07214677] backdrop-blur-md drop-shadow-xl px-8 md:px-container">
                <a href="#">
                    <h1 className="text-white text-5xl">WILBER</h1>
                </a>
                <NavLinksRender links={linksData} />
                <ButtonMenu onOpen={setisOpen} isOpen={isOpen} />
            </div>
            <div className="h-nav"/>
            <SideMenu onOpen={setisOpen} isOpen={isOpen} />
        </nav>
    )
}

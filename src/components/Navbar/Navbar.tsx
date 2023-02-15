import { useState } from "react";
import { linksData } from "@/data/links.data";
import ButtonMenu from "./ButtonMenu";
import NavLinksRender from "./NavLinksRender";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <nav className='h-20 bg-blue-500 px-container flex justify-between items-center'>
            <a href="#">
                <h1 className="text-white text-5xl">WILBER</h1>
            </a>
            <NavLinksRender links={linksData}/>
            <ButtonMenu onOpen={setisOpen} isOpen={isOpen}/>


        </nav>
    )
}

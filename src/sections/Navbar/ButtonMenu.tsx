import hamburgerMenu from '@iconify/icons-mdi/hamburger-menu';
import { InlineIcon } from '@iconify/react';

interface ButtonMenuProps {
    onOpen: (isOpen: boolean) => void;
    isOpen:boolean
}

export default function ButtonMenu({onOpen, isOpen}:ButtonMenuProps) {
    function handleOpen(){
       onOpen(!isOpen)
    }
    return (
        <button
        onClick={handleOpen}
            className="md:hidden cursor-pointer"
        >
            <InlineIcon id='hello' role="button" className='text-6xl text-white' icon={hamburgerMenu}/>
        </button>
    );
}

import hamburgerMenu from '@iconify/icons-mdi/hamburger-menu';
import { InlineIcon } from '@iconify/react';

interface ButtonMenuProps {
    onOpen: (isOpen: boolean) => void;
    isOpen: boolean
}

export default function ButtonMenu({ onOpen, isOpen }: ButtonMenuProps) {
    function handleOpen() {
        onOpen(true)
    }
    if (isOpen) {
        return (
            <InlineIcon id='hello' role="button" className='cursor-pointer text-white text-6xl md:hidden' icon={hamburgerMenu} />
        )
    }

    return (
        <button
            onClick={handleOpen}
            className="md:hidden cursor-pointer"
        >
            <InlineIcon id='hello' role="button" className='text-6xl text-white' icon={hamburgerMenu} />
        </button>
    );
}

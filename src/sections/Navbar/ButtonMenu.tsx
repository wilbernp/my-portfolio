import React, { useState } from 'react';

interface ButtonMenuProps {
    onOpen: (isOpen: boolean) => void;
    isOpen:boolean
}

export default function ButtonMenu({onOpen, isOpen}:ButtonMenuProps) {
    function handleOpen(){
        onOpen(!isOpen)
    }
    return (
        <div
        onClick={handleOpen}
            className="md:hidden cursor-pointer bg-white h-9 w-10"
        />
    );
}

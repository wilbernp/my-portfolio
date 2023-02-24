import React from 'react';

interface TextAreaProps {
    rows:number;
    placeholder:string;
}

export default function TextArea({rows, placeholder}: TextAreaProps) {
    return (
        <div className='relative my-8'>
            {/* textarea */}
            <textarea
            autoComplete='off'
                placeholder=" "
                rows={rows}
                className="peer w-full p-4 outline-none rounded-md bg-[#072146] border-2 border-white text-white focus:border-blue-400"
            ></textarea>
            {/* label */}
            <label
                 className='absolute left-2 top-0 -translate-y-1/2 text-gray-200 text-sm bg-[#072146] px-1 transition-all ease-in-out duration-150 pointer-events-none peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base'
            >{placeholder}</label>
        </div>
    )
}


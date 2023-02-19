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
                className="peer w-full p-4 outline-none bg-slate-800 border-2 border-white text-white focus:border-blue-400"
            ></textarea>
            {/* label */}
            <label
                className="absolute left-2 -top-3 text-gray-200 text-sm bg-slate-800 px-1 transition-all duration-100 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:left-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400"
            >{placeholder}</label>
        </div>
    )
}


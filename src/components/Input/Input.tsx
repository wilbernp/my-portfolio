interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}


export default function Input({ type, placeholder, name, value, onChange }: InputProps) {

    return (
        <div className='relative mb-8'>
            {/* input */}
            <input
                autoComplete="off"
                type={type}
                placeholder=" "
                name={name}
                value={value}
                onChange={onChange}
                className='peer h-12 w-full px-4 outline-none rounded-md bg-main border-2 border-neutral-300 text-neutral-300 focus:border-secondary '
            />
            {/* label */}
            <label
                className='absolute left-2 top-0 -translate-y-1/2 text-neutral-300 text-sm bg-main px-1 transition-all ease-in-out duration-150 pointer-events-none peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base '
            >{placeholder}</label>
        </div>
    )
}

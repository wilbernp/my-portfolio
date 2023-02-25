interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder:string;
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
                className='peer h-12 w-full px-4 outline-none rounded-md bg-[#072146] border-2 border-[#d5e1f1] text-[#d5e1f1] focus:border-[#3581eb] '
            />
            {/* label */}
            <label
                className='absolute left-2 top-0 -translate-y-1/2 text-gray-200 text-sm bg-[#072146] px-1 transition-all ease-in-out duration-150 pointer-events-none peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base'
            >{placeholder}</label>
        </div>
    )
}

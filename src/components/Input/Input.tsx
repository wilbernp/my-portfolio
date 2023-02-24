interface InputProps {
    type?: React.HTMLInputTypeAttribute;
    placeholder: string;
}
export default function Input({ type, placeholder }: InputProps) {

    return (
        <div className='relative mb-8'>
            {/* input */}
            <input
                type="text"
                placeholder=" "
                autoComplete="off"
                className='peer h-12 w-full px-4 outline-none rounded-md bg-[#072146] border-2 border-white text-white focus:border-blue-400'
            />
            {/* label */}
            <label
                className='absolute left-2 top-0 -translate-y-1/2 text-gray-200 text-sm bg-[#072146] px-1 transition-all ease-in-out duration-150 pointer-events-none peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base'
            >{placeholder}</label>
        </div>
    )
}

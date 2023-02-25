
interface ButtonProps {
    title: string;
    secondary?:boolean;
}

export default function Button({ title, secondary }: ButtonProps) {
    const Primary = <button type='button' className="p-2 w-full border-4 rounded-3xl border-blue-400 text-blue-400">{title}</button>
    
    const Secondary = <button className="w-full p-2 border-4 rounded-3xl border-blue-400 bg-blue-400 text-[#072146] text-base font-medium">{title}</button>

    if (secondary) {
        return Secondary
    }
    return Primary
}


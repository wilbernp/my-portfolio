
interface ButtonProps {
    title: string;
    secondary?:boolean
}

export default function Button({ title, secondary }: ButtonProps) {
    const Primary = <button type='button' className="w-40 py-2 border-4 rounded-3xl border-blue-400 text-blue-400">{title}</button>
    const Secondary = <button className="w-40 py-2 border-4 rounded-3xl border-blue-400 bg-blue-400 text-slate-800 text-base font-medium">{title}</button>

    if (secondary) {
        return Secondary
    }
    return Primary
}



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    secondary?: boolean;
    className?: string
}

export default function Button({ title, secondary, type, className }: ButtonProps) {
    const Primary = <button type={type} className={`p-2 w-full border-4 rounded-3xl ${className}`}>{title}</button>

    const Secondary = <button type={type} className={`w-full p-2 border-4 rounded-3xl text-main text-base font-medium ${className}`}>{title}</button>

    if (secondary) {
        return Secondary
    }
    return Primary
}


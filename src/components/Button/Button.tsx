
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    secondary?: boolean;
    color?: "alert" | "danger"
}

export default function Button({ title, secondary, type, color }: ButtonProps) {
    const Primary = <button type={type} className={`p-2 w-full border-4 rounded-3xl border-alert text-alert`}>{title}</button>

    const Secondary = <button type={type} className={`w-full p-2 border-4 rounded-3xl border-alert bg-alert text-main text-base font-medium`}>{title}</button>

    if (secondary) {
        return Secondary
    }
    return Primary
}


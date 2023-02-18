
interface SocialButtonProps {
    label?: string;
    href: string
}

export default function SocialLink({ label, href }: SocialButtonProps) {


    return (
        <div className="my-5">
            <a className='flex items-center gap-6 w-max' href={href}>
                <div className='inline-block w-11 h-11 bg-white rounded-full' />
                {
                    label? <span className='text-white'>{label}</span>:<></>
                }
            </a>
        </div>
    );
}


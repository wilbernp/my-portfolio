import { ILink } from '@/types/link';

interface MenuLinksRenderProps {
    links: ILink[]
}

export default function MenuLinksRender({ links }: MenuLinksRenderProps) {
    return (
        <ul className="flex flex-col h-full items-center justify-around">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <a 
                        href={link.href}
                        className="text-[#d5e1f1] py-5 px-9 rounded-3xl border-2 border-[#3581eb] text-lg transition-[background-color] duration-300 ease-in-out hover:bg-[#3581eb]" 
                        >{link.label}</a>
                    </li>
                ))
            }
        </ul>
    );
}
